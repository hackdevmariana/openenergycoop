<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrganizationResource\Pages;
use App\Filament\Resources\OrganizationResource\RelationManagers;
use App\Models\Organization;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrganizationResource extends Resource
{
    protected static ?string $model = Organization::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),

                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->maxLength(255),

                Forms\Components\FileUpload::make('logo')
                    ->image()
                    ->directory('organizations/logos')
                    ->nullable(),

                Forms\Components\TextInput::make('domain')
                    ->required()
                    ->maxLength(255),

                Forms\Components\TextInput::make('contact_email')
                    ->email()
                    ->nullable(),

                Forms\Components\TextInput::make('contact_phone')
                    ->tel()
                    ->nullable(),

                Forms\Components\TextInput::make('primary_color')
                    ->label('Primary Color')
                    ->nullable()
                    ->maxLength(7)
                    ->hint('Formato hex, ej. #ff0000'),

                Forms\Components\TextInput::make('secondary_color')
                    ->label('Secondary Color')
                    ->nullable()
                    ->maxLength(7)
                    ->hint('Formato hex, ej. #00ff00'),

                Forms\Components\Textarea::make('css_files')
                    ->label('CSS Files (URLs)')
                    ->nullable()
                    ->rows(3)
                    ->hint('URLs de archivos CSS separados por salto de línea o JSON'),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')->sortable(),
                Tables\Columns\TextColumn::make('name')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('slug')->sortable(),
                Tables\Columns\TextColumn::make('domain')->sortable(),
                Tables\Columns\TextColumn::make('contact_email')->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListOrganizations::route('/'),
            'create' => Pages\CreateOrganization::route('/create'),
            'edit' => Pages\EditOrganization::route('/{record}/edit'),
        ];
    }
}
