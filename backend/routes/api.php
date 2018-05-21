<?php

use Illuminate\Http\Request;

Route::post('/register', 'api\AuthController@register');
Route::post('/login', 'api\AuthController@login');

Route::post('/student/add', 'api\StudentController@add');
Route::get('/student/get', 'api\StudentController@get');