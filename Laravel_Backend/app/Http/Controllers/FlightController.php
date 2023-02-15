<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Flight;
use DB;

class FlightController extends Controller
{
    //

    public function loadFlight(){
        return DB::select('select * from Flights');
    }
    public function flightCount(){
        return DB::select('select Count(*) as sCount from Flights');
    }


    function addflight(Request $request)
    {
        $flight = new Flight;
        $flight->Flight_Name = $request->input('Flight_Name');
        $flight->Date_Time = $request->input('Date_Time');
        $flight->Destination = $request->input('Destination');
        $flight->Offers = $request->input('Offers');
        $flight->Offer_code = $request->input('Offer_code');
        $flight->Remarks = $request->input('Remarks');
        $flight->save();

        
        return response()->json([
            'status'=>200,
            'message'=>'flight added successfully',
        ]);
    }


    public function edit_Ffetch($id)
    {
        $findFlight = Flight::find($id);
        return response()->json([
            'status'=>200,
            'findFlight'=>$findFlight,
        ]);
    }

    public function edit_F(Request $request,$id)
    {
        $flight = Flight::find($id);
        $flight->Flight_Name = $request->input('Flight_Name');
        $flight->Date_Time = $request->input('Date_Time');
        $flight->Destination = $request->input('Destination');
        $flight->Offers = $request->input('Offers');
        $flight->Offer_code = $request->input('Offer_code');
        $flight->Remarks = $request->input('Remarks');
        $flight->update();
        return response()->json([
            'status'=>200,
            'message'=>'Flight updated',
        ]);
    }

    public function deleteFlight($id)
    {
        $DFlight = Flight::find($id);
        $DFlight->delete();
        return response()->json([
            'status'=>200,
            'message'=>$DFlight,
        ]);
    }

}
