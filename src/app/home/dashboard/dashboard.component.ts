import { Component, OnInit } from '@angular/core';
import { latLng, latLngBounds } from 'leaflet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // isShowDetails = false;

  fitBounds;

  options: any = {
    zoomControl: true,
    center: latLng(27.15608625, 75.7476063556986)
  };

  activeTilelayer = {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    settings: {
      // tslint:disable-next-line:max-line-length
      attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }
  };
  constructor() { }

  ngOnInit() {
//     var southWest =  latLng(40.712, -74.227),
//     northEast =  latLng(40.774, -74.125),
//     bounds =  latLngBounds(southWest, northEast);
// this.fitBounds = bounds;


  }

}
