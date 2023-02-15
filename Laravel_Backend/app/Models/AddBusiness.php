<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddBusiness extends Model
{
    use HasFactory;
    protected $table = 'Business';
    public $timestamps=false;
    protected $fillable = [
        'Business_Name',
        'Contact_Number',
        'Email',
        'Address',
        'Offers',
        'Offer_code',
        'Place',
    ];
}
