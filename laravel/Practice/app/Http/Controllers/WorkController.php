<?php

namespace App\Http\Controllers;

use App\Events\TestEvent;
use Illuminate\Http\Request;

class WorkController extends Controller
{
    //
public function __construct()
{

$user=array(["name"=>"GOAT"]);
TestEvent::dispatch($user);

}

public function index()
{
return view('index');


}
public function store(Request $request)
{
$path="public/images/admin";
            $img = $request->file('dp');
$newname = rand().'.'.$img->getClientOriginalExtension();
$img->move($path,$newname);
return back();

}
}
