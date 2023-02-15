<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inspector;
use DB;

class InspectorController extends Controller
{
    //

    public function loadInspector(){
        return DB::select('select * from Register where Role = "Inspector"');
    }
    
    public function insertIns(Request $request){
        
        if ($request->input('MoveInDate') !="" && $request->input('MoveOutDate') == "" )
        {
        $users = new Inspector();
        $users->uName=$request->input('uName');
        $users->Password=$request->input('Password');
        $users->Email=$request->input('Email');
        $users->Role=$request->input('Role');
        $users->Contact=$request->input('Contact');
        $users->MoveInDate=$request->input('MoveInDate');
        // $users->MoveOutDate=$request->input('MoveOutDate');
        $users->DateOfBirth=$request->input('DateOfBirth');
        $users->PlaceOfBirth=$request->input('PlaceOfBirth');
        $users->save();
        }
        elseif($request->input('MoveInDate') =="" && $request->input('MoveOutDate') == "")
        {
            $users = new Inspector();
            $users->uName=$request->input('uName');
            $users->Password=$request->input('Password');
            $users->Email=$request->input('Email');
            $users->Role=$request->input('Role');
            $users->Contact=$request->input('Contact');
            // $users->MoveInDate=$request->input('MoveInDate');
            // $users->MoveOutDate=$request->input('MoveOutDate');
            $users->DateOfBirth=$request->input('DateOfBirth');
            $users->PlaceOfBirth=$request->input('PlaceOfBirth');
            $users->save();
            }
            else
            {
                $users = new Inspector();
                $users->uName=$request->input('uName');
                $users->Password=$request->input('Password');
                $users->Email=$request->input('Email');
                $users->Role=$request->input('Role');
                $users->Contact=$request->input('Contact');
                $users->MoveInDate=$request->input('MoveInDate');
                $users->MoveOutDate=$request->input('MoveOutDate');
                $users->DateOfBirth=$request->input('DateOfBirth');
                $users->PlaceOfBirth=$request->input('PlaceOfBirth');
                $users->save();
                }
        return response()->json([
            'status'=>200,
            'message'=>'User added successfully',
        ]);
    }

    public function edit_Ifetch($id)
    {
        $usersfetch = Inspector::find($id);
        return response()->json([
            'status'=>200,
            'usersfetch'=>$usersfetch,
        ]);
    }

    public function edit_I(Request $request,$id){
        
        $users = Inspector::find($id);

       
        $users->uName=$request->input('uName');
        $users->Password=$request->input('Password');
        $users->Email=$request->input('Email');
        $users->Role=$request->input('Role');
        $users->Contact=$request->input('Contact');
        $users->MoveInDate=$request->input('MoveInDate');
        $users->MoveOutDate=$request->input('MoveOutDate');
        $users->DateOfBirth=$request->input('DateOfBirth');
        $users->PlaceOfBirth=$request->input('PlaceOfBirth');
        $users->update();
        
        return response()->json([
            'status'=>200,
            'message'=>'User added successfully',
        ]);
    }

    public function deleteInspector($id)
    {
        $users = Inspector::find($id);
        $users->delete();
        return response()->json([
            'status'=>200,
            'message'=>$users,
        ]);
    }


}

