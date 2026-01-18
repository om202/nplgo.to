<?php

namespace Tests\Feature;

use App\Models\Url;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UrlShortenerTest extends TestCase
{
    use RefreshDatabase;

    public function test_homepage_loads(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertSee('Nepal URL Shortner');
        $response->assertSee('npgo.to');
    }

    public function test_can_shorten_valid_url(): void
    {
        $response = $this->post('/', [
            'url' => 'https://laravel.com/docs/12.x',
        ]);

        $response->assertStatus(200);
        $response->assertSee('URL Shortened!');

        $this->assertDatabaseHas('urls', [
            'original_url' => 'https://laravel.com/docs/12.x',
        ]);
    }

    public function test_rejects_invalid_url(): void
    {
        $response = $this->post('/', [
            'url' => 'not-a-valid-url',
        ]);

        $response->assertSessionHasErrors('url');
    }

    public function test_rejects_empty_url(): void
    {
        $response = $this->post('/', [
            'url' => '',
        ]);

        $response->assertSessionHasErrors('url');
    }

    public function test_redirect_works(): void
    {
        $url = Url::create([
            'short_code' => 'abc123',
            'original_url' => 'https://example.com',
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

    public function test_same_url_returns_existing_short_code(): void
    {
        // First request
        $this->post('/', ['url' => 'https://github.com']);

        $firstUrl = Url::where('original_url', 'https://github.com')->first();

        // Second request with same URL
        $this->post('/', ['url' => 'https://github.com']);

        // Should still only have one entry
        $this->assertEquals(1, Url::where('original_url', 'https://github.com')->count());
    }
}
