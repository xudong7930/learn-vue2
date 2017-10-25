<?php

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 'ProjectController@index')->name('project');
Route::post('/', 'ProjectController@store')->name('project.store');
