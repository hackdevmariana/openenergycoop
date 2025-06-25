<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'logo',
        'domain',
        'contact_email',
        'contact_phone',
        'primary_color',
        'secondary_color',
        'css_files',
    ];

    // Relación con AppSettings
    public function appSettings()
    {
        return $this->hasOne(AppSetting::class);
    }
}
