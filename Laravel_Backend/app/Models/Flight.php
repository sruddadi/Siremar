<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    use HasFactory;
    protected $table = 'Flights';
    public $timestamps=false;
    protected $fillable = [
        'Flight_Name',
        'Date_Time',
        'Destination',
        'Offers',
        'Offer_code',
        'Remarks',

    ];
}
