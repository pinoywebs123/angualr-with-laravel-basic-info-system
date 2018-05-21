<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use JWTAuth;
use Tymon\Exceptions\JWTAuthException;
class AuthController extends Controller
{
    public function register(Request $request){
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));
        $user->save();
        
        if($user){
            return response()->json(['status'=> true], 200);
        }else{
            return response()->json(['status'=> false], 500);
        }
    }

    public function login(Request $request){
        $userData = $request->only('email','password');
        try{
            if(!$token = JWTAuth::attempt($userData)){
                return response()->json(['error'=>'Invalid email/password'], 401);
            }
        }catch(JWTException $e){
            return response()->json(['error'=>'Failed to create token'], 501);
        }
        return response()->json(['token'=> $token]);
    }
}
