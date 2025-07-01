<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AppSettingResource\Pages;
use App\Filament\Resources\AppSettingResource\RelationManagers;
use App\Models\AppSetting;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Auth;


class AppSettingResource extends Resource
{
    protected static ?string $model = AppSetting::class;

    protected static ?string $navigationIcon = 'heroicon-o-cog';
    protected static ?string $navigationGroup = 'Configuración';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\FileUpload::make('logo')
                    ->label('Logo')
                    ->directory('logos')
                    ->image()
                    ->nullable(),

                Forms\Components\TextInput::make('name')
                    ->label('Nombre')
                    ->required()
                    ->maxLength(255),

                Forms\Components\TextInput::make('slogan')
                    ->label('Eslogan')
                    ->maxLength(255)
                    ->nullable(),

                Forms\Components\ColorPicker::make('primary_color')
                    ->label('Color primario')
                    ->default('#0055aa')
                    ->required(),

                Forms\Components\ColorPicker::make('secondary_color')
                    ->label('Color secundario')
                    ->default('#00aa55')
                    ->required(),

                Forms\Components\Select::make('locale')
                    ->label('Idioma')
                    ->options([
                        'es' => 'Español',
                        'en' => 'Inglés',
                        'fr' => 'Francés',
                        // añade los que uses
                    ])
                    ->default('es'),

                Forms\Components\FileUpload::make('favicon_path')
                    ->label('Favicon')
                    ->directory('favicons')
                    ->image()
                    ->nullable(),

                Forms\Components\Textarea::make('custom_js')
                    ->label('JavaScript personalizado')
                    ->rows(5)
                    ->nullable(),

                Forms\Components\Hidden::make('organization_id')
                    ->default(fn() => Auth::user()?->organization_id)
                    ->required()
                    ->disabled(),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('logo')->label('Logo'),
                Tables\Columns\TextColumn::make('name')->label('Nombre'),
                Tables\Columns\TextColumn::make('slogan')->label('Eslogan'),
                Tables\Columns\TextColumn::make('primary_color')->label('Color Primario'),
                Tables\Columns\TextColumn::make('secondary_color')->label('Color Secundario'),
                Tables\Columns\TextColumn::make('locale')->label('Idioma'),
                Tables\Columns\TextColumn::make('organization.name')->label('Organización'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                //
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAppSettings::route('/'),
            'create' => Pages\CreateAppSetting::route('/create'),
            'edit' => Pages\EditAppSetting::route('/{record}/edit'),
        ];
    }
}
