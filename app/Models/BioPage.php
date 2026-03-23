<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BioPage extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'username',
        'display_name',
        'bio',
        'avatar_url',
        'theme',
        'show_nepali_badge',
    ];

    /**
     * Get the user that owns this bio page.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the links for this bio page, ordered by position.
     */
    public function links(): HasMany
    {
        return $this->hasMany(BioLink::class)->orderBy('position');
    }

    /**
     * Find a bio page by its username.
     */
    public static function findByUsername(string $username): ?self
    {
        return static::where('username', strtolower($username))->first();
    }
}
