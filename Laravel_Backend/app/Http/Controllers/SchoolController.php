<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schools;
use DB;

class SchoolController extends Controller
{
    //
    public function loadSchool(){
        return DB::select('select * from Schools');
    }
    public function schoolCount(){
        return DB::select('select Count(*) as sCount from Schools');
    }
    function school(Request $request)
    {
        $schools = new Schools;
        $schools->SchoolName = $request->input('SchoolName');
        $schools->Contact = $request->input('Contact');
        $schools->Email = $request->input('Email');
        $schools->Address = $request->input('Address');
        $schools->Remarks = $request->input('Remarks');
        $schools->save();

        
        return response()->json([
            'status'=>200,
            'message'=>'School added successfully',
        ]);
       
       
        // // $Schools = new Schools;
        // $SchoolName = $request->input('SchoolName');
        // $Contact = $request->input('Contact');
        // $Email = $request->input('Email');
        // $Address = $request->input('Address');
        // $Remarks = $request->input('Remarks');
        // $School = array('SchoolName'=>$SchoolName,'Contact'=>$Contact,'Email'=>$Email,'Address'=>$Address,'Remarks'=>$Remarks);
        // DB::table('Schools')->insert($School);
        // return $School;
    }

    public function edit_fetch($id)
    {
        $findSchool = Schools::find($id);
        return response()->json([
            'status'=>200,
            'findSchool'=>$findSchool,
        ]);
    }

    public function edit(Request $request,$id)
    {
        $schools = Schools::find($id);
        $schools->SchoolName = $request->input('SchoolName');
        $schools->Contact = $request->input('Contact');
        $schools->Email = $request->input('Email');
        $schools->Address = $request->input('Address');
        $schools->Remarks = $request->input('Remarks');
        $schools->update();
        return response()->json([
            'status'=>200,
            'message'=>'school updated',
        ]);
    }

    public function deleteSchool($id)
    {
        $schools = Schools::find($id);
        $schools->delete();
        return response()->json([
            'status'=>200,
            'message'=>$schools,
        ]);
    }
}
