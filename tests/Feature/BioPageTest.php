<?php

namespace Tests\Feature;

use App\Models\BioLink;
use App\Models\BioPage;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class BioPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_bio_editor_requires_authentication(): void
    {
        $response = $this->get('/bio');

        $response->assertRedirect('/auth/google');
    }

    public function test_bio_editor_auto_creates_page_on_first_visit(): void
    {
        $user = User::factory()->create(['name' => 'Test User']);

        $response = $this->actingAs($user)->get('/bio');

        $response->assertStatus(200);
        $response->assertInertia(
            fn(Assert $page) => $page
                ->component('BioEditor')
                ->has('bioPage')
                ->where('bioPage.display_name', 'Test User')
        );

        $this->assertDatabaseHas('bio_pages', [
            'user_id' => $user->id,
            'display_name' => 'Test User',
        ]);
    }

    public function test_user_can_update_bio_page(): void
    {
        $user = User::factory()->create();
        $bioPage = BioPage::create([
            'user_id' => $user->id,
            'username' => 'testuser',
            'display_name' => 'Test User',
        ]);

        $response = $this->actingAs($user)->put('/bio', [
            'username' => 'newname',
            'display_name' => 'New Display Name',
            'bio' => 'Hello from Nepal!',
            'theme' => 'dark',
        ]);

        $response->assertRedirect(route('bio.edit'));
        $this->assertDatabaseHas('bio_pages', [
            'id' => $bioPage->id,
            'username' => 'newname',
            'display_name' => 'New Display Name',
            'bio' => 'Hello from Nepal!',
            'theme' => 'dark',
        ]);
    }

    public function test_username_must_be_unique(): void
    {
        $user1 = User::factory()->create();
        $user2 = User::factory()->create();

        BioPage::create([
            'user_id' => $user1->id,
            'username' => 'taken',
            'display_name' => 'User One',
        ]);

        $bioPage2 = BioPage::create([
            'user_id' => $user2->id,
            'username' => 'different',
            'display_name' => 'User Two',
        ]);

        $response = $this->actingAs($user2)->put('/bio', [
            'username' => 'taken',
            'display_name' => 'User Two',
            'bio' => '',
            'theme' => 'default',
        ]);

        $response->assertSessionHasErrors('username');
    }

    public function test_username_validation_rules(): void
    {
        $user = User::factory()->create();
        BioPage::create([
            'user_id' => $user->id,
            'username' => 'testuser',
            'display_name' => 'Test User',
        ]);

        // Too short
        $response = $this->actingAs($user)->put('/bio', [
            'username' => 'ab',
            'display_name' => 'Test',
            'bio' => '',
            'theme' => 'default',
        ]);
        $response->assertSessionHasErrors('username');

        // Invalid characters
        $response = $this->actingAs($user)->put('/bio', [
            'username' => 'user name!',
            'display_name' => 'Test',
            'bio' => '',
            'theme' => 'default',
        ]);
        $response->assertSessionHasErrors('username');
    }

    public function test_user_can_add_link(): void
    {
        $user = User::factory()->create();
        $bioPage = BioPage::create([
            'user_id' => $user->id,
            'username' => 'testuser',
            'display_name' => 'Test User',
        ]);

        $response = $this->actingAs($user)->post('/bio/links', [
            'title' => 'My Website',
            'url' => 'https://example.com',
        ]);

        $response->assertRedirect(route('bio.edit'));
        $this->assertDatabaseHas('bio_links', [
            'bio_page_id' => $bioPage->id,
            'title' => 'My Website',
            'url' => 'https://example.com',
        ]);
    }

    public function test_user_can_delete_link(): void
    {
        $user = User::factory()->create();
        $bioPage = BioPage::create([
            'user_id' => $user->id,
            'username' => 'testuser',
            'display_name' => 'Test User',
        ]);

        $link = BioLink::create([
            'bio_page_id' => $bioPage->id,
            'title' => 'Delete Me',
            'url' => 'https://example.com',
            'position' => 0,
        ]);

        $response = $this->actingAs($user)->delete("/bio/links/{$link->id}");

        $response->assertRedirect(route('bio.edit'));
        $this->assertDatabaseMissing('bio_links', ['id' => $link->id]);
    }

    public function test_user_cannot_delete_others_link(): void
    {
        $user1 = User::factory()->create();
        $user2 = User::factory()->create();

        $bioPage = BioPage::create([
            'user_id' => $user1->id,
            'username' => 'user1',
            'display_name' => 'User One',
        ]);

        $link = BioLink::create([
            'bio_page_id' => $bioPage->id,
            'title' => 'Not Yours',
            'url' => 'https://example.com',
            'position' => 0,
        ]);

        $response = $this->actingAs($user2)->delete("/bio/links/{$link->id}");

        $response->assertStatus(403);
        $this->assertDatabaseHas('bio_links', ['id' => $link->id]);
    }

    public function test_public_bio_page_renders(): void
    {
        $user = User::factory()->create();
        $bioPage = BioPage::create([
            'user_id' => $user->id,
            'username' => 'testuser',
            'display_name' => 'Test User',
            'bio' => 'Hello!',
        ]);

        BioLink::create([
            'bio_page_id' => $bioPage->id,
            'title' => 'My Website',
            'url' => 'https://example.com',
            'position' => 0,
            'is_active' => true,
        ]);

        $response = $this->get('/@testuser');

        $response->assertStatus(200);
        $response->assertInertia(
            fn(Assert $page) => $page
                ->component('BioPagePublic')
                ->where('bioPage.username', 'testuser')
                ->where('bioPage.display_name', 'Test User')
                ->has('bioPage.links', 1)
        );
    }

    public function test_public_bio_page_hides_inactive_links(): void
    {
        $user = User::factory()->create();
        $bioPage = BioPage::create([
            'user_id' => $user->id,
            'username' => 'testuser',
            'display_name' => 'Test User',
        ]);

        BioLink::create([
            'bio_page_id' => $bioPage->id,
            'title' => 'Active Link',
            'url' => 'https://example.com',
            'position' => 0,
            'is_active' => true,
        ]);

        BioLink::create([
            'bio_page_id' => $bioPage->id,
            'title' => 'Hidden Link',
            'url' => 'https://hidden.com',
            'position' => 1,
            'is_active' => false,
        ]);

        $response = $this->get('/@testuser');

        $response->assertStatus(200);
        $response->assertInertia(
            fn(Assert $page) => $page
                ->component('BioPagePublic')
                ->has('bioPage.links', 1)
        );
    }

    public function test_public_bio_page_returns_404_for_invalid_username(): void
    {
        $response = $this->get('/@nonexistent');

        $response->assertStatus(404);
    }

    public function test_existing_url_redirect_still_works(): void
    {
        $user = User::factory()->create();
        $url = \App\Models\Url::create([
            'short_code' => 'abc123',
            'original_url' => 'https://example.com',
            'user_id' => $user->id,
        ]);

        $response = $this->get('/abc123');

        $response->assertRedirect('https://example.com');
        $response->assertStatus(301);
    }
}
