<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('app_settings', function (Blueprint $table) {
            $table->id();

            $table->string('logo')->nullable();
            $table->string('name');
            $table->string('slogan')->nullable();

            $table->string('primary_color', 7)->nullable(); // ej: #0055aa
            $table->string('secondary_color', 7)->nullable();

            $table->string('locale', 5)->default('es'); // ej: es, en, fr

            $table->string('favicon_path')->nullable();

            $table->text('custom_js')->nullable();

            $table->foreignId('organization_id')->constrained()->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('app_settings');
    }
};
