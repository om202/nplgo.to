<?php

namespace Tests\Feature;

use App\Models\Url;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class UrlShortenerTest extends TestCase
{
    use RefreshDatabase;

    public function test_homepage_loads_for_guests(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(
            fn(Assert $page) => $page
                ->component('Home')
        );
    }

    public function test_homepage_redirects_authenticated_users_to_admin(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/');

        $response->assertRedirect('/admin');
    }

    public function test_guest_shortening_redirects_to_google_auth(): void
    {
        $response = $this->post('/', [
            'url' => 'https://laravel.com/docs/12.x',
        ]);

        $response->assertRedirect(route('auth.google'));
        $this->assertEquals('https://laravel.com/docs/12.x', session('pending_url'));
    }

    public function test_authenticated_user_can_shorten_url(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/', [
            'url' => 'https://laravel.com/docs/12.x',
        ]);

        $response->assertRedirect(route('admin'));
        $this->assertDatabaseHas('urls', [
            'original_url' => 'https://laravel.com/docs/12.x',
            'user_id' => $user->id,
        ]);
    }

    public function test_rejects_invalid_url(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/', [
            'url' => 'not-a-valid-url',
        ]);

        $response->assertSessionHasErrors('url');
    }

    public function test_rejects_empty_url(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/', [
            'url' => '',
        ]);

        $response->assertSessionHasErrors('url');
    }

    public function test_redirect_works(): void
    {
        $user = User::factory()->create();

        $url = Url::create([
            'short_code' => 'abc123',
            'original_url' => 'https://example.com',
            'user_id' => $user->id,
        ]);

        $response = $this->get('/abc123');

        $response->assertRedirect('https://example.com');
        $response->assertStatus(301);
    }

    public function test_404_for_unknown_code(): void
    {
        $response = $this->get('/nonexistent');

        $response->assertStatus(404);
    }

    public function test_same_url_returns_existing_short_code_for_same_user(): void
    {
        $user = User::factory()->create();

        // First request
        $this->actingAs($user)->post('/', ['url' => 'https://github.com']);

        $firstUrl = Url::where('original_url', 'https://github.com')->first();

        // Second request with same URL
        $this->actingAs($user)->post('/', ['url' => 'https://github.com']);

        // Should still only have one entry for this user
        $this->assertEquals(1, Url::where('original_url', 'https://github.com')
            ->where('user_id', $user->id)
            ->count());
    }

    public function test_admin_page_requires_authentication(): void
    {
        $response = $this->get('/admin');

        // Auth middleware redirects unauthenticated users to Google OAuth
        $response->assertRedirect('/auth/google');
    }

    public function test_user_can_delete_their_url(): void
    {
        $user = User::factory()->create();

        $url = Url::create([
            'short_code' => 'del123',
            'original_url' => 'https://todelete.com',
            'user_id' => $user->id,
        ]);

        $response = $this->actingAs($user)->delete("/admin/urls/{$url->id}");

        $response->assertRedirect(route('admin'));
        $this->assertDatabaseMissing('urls', ['id' => $url->id]);
    }

    public function test_user_cannot_delete_others_url(): void
    {
        $user1 = User::factory()->create();
        $user2 = User::factory()->create();

        $url = Url::create([
            'short_code' => 'own123',
            'original_url' => 'https://user1url.com',
            'user_id' => $user1->id,
        ]);

        $response = $this->actingAs($user2)->delete("/admin/urls/{$url->id}");

        $response->assertStatus(403);
        $this->assertDatabaseHas('urls', ['id' => $url->id]);
    }
}

