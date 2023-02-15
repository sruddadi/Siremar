<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InsertUsers extends Model
{

    use HasFactory;
    protected $table = 'Register';
    public $timestamps=false;
    protected $fillable = [
        'uName',
        'Password',
        'Email',
        'Role',
        'Contact',
        'MoveInDate',
        'MoveOutDate',
        'DateOfBirth',
        'PlaceOfBirth',
    ];
}
