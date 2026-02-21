<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Url extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'short_code',
        'original_url',
        'url_hash',
        'is_locked',
        'user_id',
    ];

    protected $casts = [
        'is_locked' => 'boolean',
    ];

    /**
     * Boot the model and add event listeners.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($url) {
            if ($url->original_url && !$url->url_hash) {
                $url->url_hash = hash('sha256', $url->original_url);
            }
        });
    }

    /**
     * Get the user that owns this URL.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

