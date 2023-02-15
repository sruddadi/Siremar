<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;


class RegisterController extends Controller
{
    public function index(){
        return DB::select('select Business_Name as Store_Name,Offers,Offer_code from Business
        UNION
        select Flight_Name as Store_Name,Offers,Offer_code from Flights');
    }
    
}

