import { Component, OnInit } from '@angular/core';
import { MapviewComponent } from '../dashboard/mapview/mapview.component';
import { latLng, latLngBounds } from 'leaflet';

@Component({
  selector: 'app-subhome',
  templateUrl: './subhome.component.html',
  styleUrls: ['./subhome.component.css']
})
export class SubhomeComponent implements OnInit {
  options: any = {
    zoomControl: false,
    center: latLng(27.15608625, 75.7476063556986)
  };

  activeTilelayer = {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    settings: {
      attribution: ''
    }
  };
  fitBounds;



constructor() { }
ngOnInit() {
  const southWest = latLng(40.712, -74.227);
  const northEast = latLng(40.774, -74.125);
  const bounds = latLngBounds(southWest, northEast);
  this.fitBounds = bounds;

}
onZoomChange(zoom: number) {

}

}
