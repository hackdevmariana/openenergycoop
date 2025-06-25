<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AppSetting;
use Illuminate\Http\Request;

class AppSettingController extends Controller
{
    public function show($organizationId)
    {
        $appSetting = AppSetting::where('organization_id', $organizationId)->firstOrFail();

        return response()->json($appSetting);
    }

    public function update(Request $request, $organizationId)
    {
        $appSetting = AppSetting::where('organization_id', $organizationId)->firstOrFail();

        $validated = $request->validate([
            'logo' => 'nullable|string',
            'name' => 'required|string|max:255',
            'slogan' => 'nullable|string|max:255',
            'primary_color' => 'nullable|string|max:7',
            'secondary_color' => 'nullable|string|max:7',
            'locale' => 'nullable|string|max:5',
            'favicon_path' => 'nullable|string',
            'custom_js' => 'nullable|string',
        ]);

        $appSetting->update($validated);

        return response()->json($appSetting);
    }
}
