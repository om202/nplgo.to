<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Step 1: Add nullable column
        Schema::table('urls', function (Blueprint $table) {
            $table->string('url_hash', 64)->nullable()->after('original_url');
        });

        // Step 2: Generate hashes for existing URLs
        DB::table('urls')->orderBy('id')->chunk(100, function ($urls) {
            foreach ($urls as $url) {
                DB::table('urls')
                    ->where('id', $url->id)
                    ->update(['url_hash' => hash('sha256', $url->original_url)]);
            }
        });

        // Step 3: Make column not nullable and add indexes
        Schema::table('urls', function (Blueprint $table) {
            $table->string('url_hash', 64)->nullable(false)->change();
            $table->index('url_hash');
            $table->index(['user_id', 'url_hash']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('urls', function (Blueprint $table) {
            $table->dropIndex(['user_id', 'url_hash']);
            $table->dropIndex(['url_hash']);
            $table->dropColumn('url_hash');
        });
    }
};
