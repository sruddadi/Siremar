<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AddBusiness;
use DB;

class BusinessController extends Controller
{
    //

    public function loadBusiness(){
        return DB::select('select * from Business');
    }
    function addbusiness(Request $request)
    {
        $addBusiness = new AddBusiness;
        $addBusiness->Business_Name = $request->input('Business_Name');
        $addBusiness->Contact_Number = $request->input('Contact_Number');
        $addBusiness->Email = $request->input('Email');
        $addBusiness->Address = $request->input('Address');
        $addBusiness->Offers = $request->input('Offers');
        $addBusiness->Offer_code = $request->input('Offer_code');
        $addBusiness->place = $request->input('Place');
        $addBusiness->save();

        return response()->json([
            'status'=>200,
            'message'=>'Business added successfully',
        ]);

    }

    public function edit_Bfetch($id)
    {
        $findBusiness = AddBusiness::find($id);
        return response()->json([
            'status'=>200,
            'findBusiness'=>$findBusiness,
        ]);
    }


    public function edit_B(Request $request,$id)
    {
        $addBusiness = AddBusiness::find($id);
       
        $addBusiness->Business_Name = $request->input('Business_Name');
        $addBusiness->Contact_Number = $request->input('Contact_Number');
        $addBusiness->Email = $request->input('Email');
        $addBusiness->Address = $request->input('Address');
        $addBusiness->Offers = $request->input('Offers');
        $addBusiness->Offer_code = $request->input('Offer_code');
        $addBusiness->place = $request->input('Place');
        $addBusiness->update();
        return response()->json([
            'status'=>200,
            'message'=>'Business updated',
        ]);
    }


    public function deleteBusiness($id)
    {
        $deleteBusiness = AddBusiness::find($id);
        $deleteBusiness->delete();
        return response()->json([
            'status'=>200,
            'message'=>$deleteBusiness,
        ]);
    }



}

