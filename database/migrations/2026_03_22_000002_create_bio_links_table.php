<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bio_links', function (Blueprint $table) {
            $table->id();
            $table->foreignId('bio_page_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->string('url');
            $table->string('icon', 50)->nullable();
            $table->unsignedInteger('position')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index(['bio_page_id', 'position']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bio_links');
    }
};
