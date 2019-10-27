import { Component, OnInit } from '@angular/core';
import { MapviewComponent } from '../dashboard/mapview/mapview.component';
import { latLng } from 'leaflet';

@Component({
  selector: 'app-subhome',
  templateUrl: './subhome.component.html',
  styleUrls: ['./subhome.component.css']
})
export class SubhomeComponent implements OnInit {
  fitBounds;
  options: any = {
    zoomControl: false,
    center: latLng(27.15608625, 75.7476063556986)
  };
  activeTilelayer = {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    settings: {
      // tslint:disable-next-line: max-line-length
      attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }
  };
  zoom =5;
  constructor() { }



  ngOnInit() {
    this.fitBounds=  latLng(46.879966, -121.726909);
  }

  onZoomChange(zoom: number){

  }

}
