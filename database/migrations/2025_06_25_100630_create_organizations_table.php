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
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('slug')->unique();
            $table->string('logo')->nullable();
            $table->string('domain')->nullable();

            $table->string('contact_email')->nullable();
            $table->string('contact_phone')->nullable();

            $table->string('primary_color', 7)->nullable();
            $table->string('secondary_color', 7)->nullable();

            $table->text('css_files')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizations');
    }
};
