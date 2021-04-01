import 'ol/ol.css';
import Feature from 'ol/Feature';
import {Map, View} from 'ol';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import Point from 'ol/geom/Point';
import TileJSON from 'ol/source/TileJSON';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {useGeographic} from 'ol/proj';

//usado para que tome de referencia el mapa como proyeccion.
useGeographic();

var place = [-68, 10];

var iconFeature = new Feature({
    geometry: new Point(place),
    name: 'Tel Carlos',
    population: 4000,
    rainfall: 500,
  });
  
  var iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 50],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'icons/maker-camion.svg',
    }),
  });
  
  iconFeature.setStyle(iconStyle);
  
  var vectorSource = new VectorSource({
    features: [iconFeature],
  });
  
  var vectorLayer = new VectorLayer({
    source: vectorSource,
  });
  
  var rasterLayer = new TileLayer({
    source: new TileJSON({
      url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1',
      crossOrigin: '',
    }),
  });
  

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM({
        url: 'https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga',
        crossOrigin: ''
      })
    }),vectorLayer

  ],
  view: new View({
    center: place,
    zoom: 8,
  })
});
