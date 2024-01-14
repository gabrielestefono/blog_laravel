<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required(),
                TextInput::make('email')
                    ->required(),
                TextInput::make('password')
                    ->required()
                    ->type('password'),
                FileUpload::make('imagem_pequena')
                    ->image()
                    ->directory('users')
                    ->helperText('Tamanho recomendado: 36x36'),
                // TextInput::make('alt_imagem_pequena'),
                FileUpload::make('imagem_grande')
                    ->image()
                    ->directory('users')
                    ->helperText('Tamanho recomendado: 64x64'),
                // TextInput::make('alt_imagem_grande'),
                TextInput::make('sobre'),
                TextInput::make('profissao'),
                TextInput::make('facebook')
                    ->helperText('Exemplo: https://www.facebook.com/seu_perfil'),
                TextInput::make('instagram')
                    ->helperText('Exemplo: https://www.instagram.com/seu_perfil'),
                TextInput::make('twitter')
                    ->helperText('Exemplo: https://www.twitter.com/seu_perfil'),
                TextInput::make('youtube')
                    ->helperText('Exemplo: https://www.youtube.com/seu_perfil'),

            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->sortable(),
                TextColumn::make('name'),
                TextColumn::make('email'),
                ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
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
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
