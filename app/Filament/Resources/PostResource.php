<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Filament\Resources\PostResource\RelationManagers;
use App\Models\Categoria;
use App\Models\Post;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Auth;

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('titulo')
                    ->required(),
                RichEditor::make('corpo')
                    ->required()
                    ->disableToolbarButtons([
                        'blockquote',
                        'strike',
                        'link',
                        'orderedList',
                        'italic',
                        'codeBlock',
                        'underline',
                        'bulletList',
                        'bold',
                    ]),
                FileUpload::make('imagem_destaque')
                    ->image()
                    ->directory('posts')
                    ->required()
                    ->helperText('Tamanho recomendado: 1216x600'),
                FileUpload::make('imagem_media')
                    ->image()
                    ->directory('posts')
                    ->required()
                    ->helperText('Tamanho recomendado: 800x462'),
                FileUpload::make('imagem_pequena')
                    ->image()
                    ->directory('posts')
                    ->required()
                    ->helperText('Tamanho recomendado: 360x240'),
                Select::make('categoria_id')
                    ->relationship(name: 'categoria', titleAttribute: 'nome')
                    ->required(),
                TextInput::make('data')
                    ->required()
                    ->type('date'),
                TextInput::make('user_id')
                    ->default(Auth::user()->id)
                    ->type('hidden')
                    ->label(''),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->sortable(),
                TextColumn::make('titulo'),
                TextColumn::make('data'),
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
            'index' => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePost::route('/create'),
            'edit' => Pages\EditPost::route('/{record}/edit'),
        ];
    }
}
