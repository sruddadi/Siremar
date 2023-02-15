<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use DB;

class EventController extends Controller
{
    //


    public function loadEvent(){
        return DB::select('select * from Events');
    }

    function addevent(Request $request)
    {
        $event = new Event;
        $event->EventName = $request->input('EventName');
        $event->Contact = $request->input('Contact');
        $event->Email = $request->input('Email');
        $event->Address = $request->input('Address');
        $event->Host = $request->input('Host');
        $event->EventDay = $request->input('EventDay');
        $event->Remarks = $request->input('Remarks');
        $event->save();

        
        return response()->json([
            'status'=>200,
            'message'=>'Event added successfully',
        ]);
    }
    public function edit_Efetch($id)
    {
        $findevent = Event::find($id);
        return response()->json([
            'status'=>200,
            'findevent'=>$findevent,
        ]);
    }

    public function edit_E(Request $request,$id)
    {
        $event = Event::find($id);
        $event->EventName = $request->input('EventName');
        $event->Contact = $request->input('Contact');
        $event->Email = $request->input('Email');
        $event->Address = $request->input('Address');
        $event->Host = $request->input('Host');
        $event->EventDay = $request->input('EventDay');
        $event->Remarks = $request->input('Remarks');
        $event->update();
        return response()->json([
            'status'=>200,
            'message'=>'Event updated',
        ]);
    }

    public function deleteEvent($id)
    {
        $deleteEvent = Event::find($id);
        $deleteEvent->delete();
        return response()->json([
            'status'=>200,
            'message'=>$deleteEvent,
        ]);
    }


}
