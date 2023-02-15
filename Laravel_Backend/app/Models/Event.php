<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $table = 'Events';
    public $timestamps=false;
    protected $fillable = [
        'EventName',
        'Contact',
        'Email',
        'Address',
        'Host',
        'EventDay',
        'Remarks',

    ];

}
