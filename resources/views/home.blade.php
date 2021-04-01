@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/css/ol.css" type="text/css">
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
<style>
    .map {
        position: absolute;
        width: 100%;
        height: 100%;
        top:55px; 
    }
  </style>

<div id="map" class="map"></div>
<div id="popup"></div>
@endsection
