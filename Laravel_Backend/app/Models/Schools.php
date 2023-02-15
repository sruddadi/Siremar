<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schools extends Model
{
    use HasFactory;
    protected $table = 'Schools';
    public $timestamps=false;
    protected $fillable = [
        'SchoolName',
        'Contact',
        'Email',
        'Address',
        'Remarks',
    ];
    
}
 