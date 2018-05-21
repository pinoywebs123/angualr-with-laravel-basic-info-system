<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Students;
class StudentController extends Controller
{
    
    public function get(){
        $students = Students::all();
        return response()->json(['data'=> $students]);
    }
    public function add(Request $request){
      $this->validate($request, [
        'id'=> 'required|unique:students',
        'first_name'=> 'required',
        'last_name'=> 'required',
        'course'=> 'required',
        'year'=> 'required',
        'contact'=> 'required',
        'address'=> 'required',

      ]);
       

       $new = new Students;
       $new->id = $request->input('id');
       $new->fname = $request->input('first_name');
       $new->lname = $request->input('last_name');
       $new->course = $request->input('course');
       $new->year = $request->input('year');
       $new->contact = $request->input('contact');
       $new->address =$request->input('address');
       $new->save(); 
      
       return response()->json(['status'=> true]);
       
       
    }
}
