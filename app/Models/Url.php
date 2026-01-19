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
        'user_id',
    ];

    /**
     * Get the user that owns this URL.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

