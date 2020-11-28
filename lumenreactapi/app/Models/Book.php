<?php


namespace App\Models;
use \Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'id',
        'title',
        'author',
        'description',
        'date_publish'
    ];

    protected $table = 'book';
}
