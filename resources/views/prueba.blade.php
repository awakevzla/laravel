@extends('layouts.app')
@section('content')
    <h2>Hola {{Auth::user()->name}}</h2>
    @endsection