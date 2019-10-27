import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { tileLayer, Map,latLng } from 'leaflet';


@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {
  _zoom:number;
  _map: Map;
  _activeTile:'';
  activetileLayer: any;
  @Input() fitBounds;
  @Input() layers;
  @Output() readonly zoomChange = new EventEmitter<number>();
  @Input() options;

  @Input('activeTile')
  set activeTile(value: any) {
    this._activeTile = value;
    this.changetileLayer(value);
  }
  @Input('zoom')
  set zoom(value: number) {
    this._zoom = value;
    this.onZoomChange(value);
  }

// options: object = null;
  constructor() { }

  ngOnInit() {
    this.options = {
      layers: [
        // tslint:disable-next-line:max-line-length
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })
      ],
      zoom: 13,
      center: [51.505, -0.09]
    };
  }

  onZoomChange(zoom){

  }
  onMapReady(mapIns : Map){
    this._map = mapIns;
    this.changetileLayer(this._activeTile);
    // this.activetileLayer.addTo(this._map);
    // this.activetileLayer &&
    //   !this._map.hasLayer(this.activetileLayer) &&
    //   this.activetileLayer.addTo(this._map);
  }
  changetileLayer(tile: any): void {

    // tslint:disable-next-line:no-unused-expression
    // this._map &&
    // this._map.hasLayer(this.activetileLayer) &&
    //   this.activetileLayer.remove();
    // tile.provider && tile.provider === 'ESRI'
    //   // ? (this.activetileLayer = ESRI.basemapLayer(tile.layertype))
    //   ?''
    //   : (this.activetileLayer = tileLayer(tile.url, tile.settings));
    // // tslint:disable-next-line:no-unused-expression
    // this._map && this.activetileLayer.addTo(this._map);
  }

}
