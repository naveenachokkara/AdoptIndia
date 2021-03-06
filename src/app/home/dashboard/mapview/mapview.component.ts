import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { tileLayer, Map, latLng, geoJSON } from 'leaflet';
import * as _ from 'underscore';
import * as L from 'leaflet';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';



@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.scss']
})
export class MapviewComponent implements OnInit, AfterViewInit {
  private chartContainer: ElementRef;
  values = [];
  data; groupedData; legends = [];

  @ViewChild('chartContainer') set content(content: ElementRef) {
    this.chartContainer = content;
  }
  @ViewChild('searchcontainer') searchcontainer: ElementRef;

  @Input() options;
  @Input() fitBounds;
  chartoptions: any;
  map: Map;
  markerGroup: any;
  activetileLayer: any;
  selactiveTile = '';
  selectedRegion: string;
  createdRegion;
  showDetails = false;
  currentDate: any;
  selected = 0;
  isActionEnabled = true;
  @Input() showAction;
  // @Input() fromDashboardMap;
  @Input('activeTile')
  set activeTile(value: any) {
    this.selactiveTile = value;
    this.changetileLayer(value);
  }

  regioncords = [
    [
      [
        77.83745079947457,
        35.494009507787766
      ],
      [
        78.91226891471322,
        34.32193634697579
      ],
      [
        78.81108646028574,
        33.50619802503242
      ],
      [
        79.20889163606857,
        32.994394639613716
      ],
      [
        79.17612877799553,
        32.48377981213771
      ],
      [
        78.45844648632601,
        32.61816437431273
      ],
      [
        78.73889448437401,
        31.515906073527063
      ],
      [
        79.7213668151071,
        30.882714748654728
      ],
      [
        81.11125613802932,
        30.183480943313402
      ],
      [
        80.4767212259174,
        29.72986522065534
      ],
      [
        80.08842451367627,
        28.79447011974014
      ],
      [
        81.05720258985203,
        28.416095282499043
      ],
      [
        81.99998742058497,
        27.925479234319994
      ],
      [
        83.30424889519955,
        27.36450572357556
      ],
      [
        84.6750179381738,
        27.234901231387536
      ],
      [
        85.25177859898338,
        26.72619843190634
      ],
      [
        86.02439293817918,
        26.63098460540857
      ],
      [
        87.22747195836628,
        26.397898057556077
      ],
      [
        88.06023766474982,
        26.41461538340249
      ],
      [
        88.17480431514092,
        26.81040517832595
      ],
      [
        88.04313276566123,
        27.445818589786825
      ],
      [
        88.12044070836987,
        27.876541652939594
      ],
      [
        88.73032596227856,
        28.086864732367516
      ],
      [
        88.81424848832054,
        27.29931590423936
      ],
      [
        88.83564253128938,
        27.098966376243762
      ],
      [
        89.74452762243884,
        26.719402981059957
      ],
      [
        90.37327477413407,
        26.87572418874288
      ],
      [
        91.21751264848643,
        26.808648179628022
      ],
      [
        92.03348351437509,
        26.83831045176356
      ],
      [
        92.10371178585973,
        27.452614040633208
      ],
      [
        91.69665652869668,
        27.77174184825166
      ],
      [
        92.50311893104364,
        27.89687632904645
      ],
      [
        93.41334760943268,
        28.640629380807226
      ],
      [
        94.56599043170294,
        29.277438055939985
      ],
      [
        95.40480228066464,
        29.03171662039213
      ],
      [
        96.11767866413103,
        29.452802028922466
      ],
      [
        96.58659061074749,
        28.830979519154344
      ],
      [
        96.24883344928779,
        28.41103099213444
      ],
      [
        97.32711388549004,
        28.26158274994634
      ],
      [
        97.40256147663612,
        27.88253611908544
      ],
      [
        97.0519885599681,
        27.69905894623315
      ],
      [
        97.1339990580153,
        27.083773505149964
      ],
      [
        96.41936567585097,
        27.264589341739224
      ],
      [
        95.12476769407496,
        26.5735720891323
      ],
      [
        95.1551534362626,
        26.001307277932085
      ],
      [
        94.60324913938538,
        25.162495428970402
      ],
      [
        94.55265791217164,
        24.675238348890332
      ],
      [
        94.10674197792505,
        23.85074087167348
      ],
      [
        93.3251876159428,
        24.078556423432204
      ],
      [
        93.28632693885928,
        23.043658352139005
      ],
      [
        93.06029422401463,
        22.70311066333557
      ],
      [
        93.16612755734836,
        22.278459580977103
      ],
      [
        92.67272098182556,
        22.041238918541254
      ],
      [
        92.14603478390681,
        23.627498684172593
      ],
      [
        91.86992760617132,
        23.624346421802784
      ],
      [
        91.70647505083211,
        22.985263983649183
      ],
      [
        91.15896325069971,
        23.50352692310439
      ],
      [
        91.46772993364367,
        24.072639471934792
      ],
      [
        91.91509280799443,
        24.13041372323711
      ],
      [
        92.37620161333481,
        24.976692816664965
      ],
      [
        91.79959598182207,
        25.147431748957317
      ],
      [
        90.8722107279121,
        25.132600612889547
      ],
      [
        89.92069258012185,
        25.26974986419218
      ],
      [
        89.83248091019962,
        25.96508209889548
      ],
      [
        89.35509402868729,
        26.014407253518073
      ],
      [
        88.56304935094977,
        26.44652558034272
      ],
      [
        88.2097892598025,
        25.76806570078271
      ],
      [
        88.93155398962308,
        25.238692328384776
      ],
      [
        88.30637251175602,
        24.866079413344206
      ],
      [
        88.08442223506242,
        24.501657212821925
      ],
      [
        88.69994022009092,
        24.23371491138856
      ],
      [
        88.52976972855377,
        23.631141872649163
      ],
      [
        88.87631188350309,
        22.879146429937826
      ],
      [
        89.03196129756623,
        22.055708319582976
      ],
      [
        88.88876590368542,
        21.690588487224748
      ],
      [
        88.20849734899521,
        21.703171698487807
      ],
      [
        86.97570438024027,
        21.49556163175521
      ],
      [
        87.03316857294887,
        20.743307806882413
      ],
      [
        86.49935102737378,
        20.151638495356607
      ],
      [
        85.0602657409097,
        19.4785788029711
      ],
      [
        83.94100589390001,
        18.302009792549725
      ],
      [
        83.18921715691785,
        17.67122142177898
      ],
      [
        82.19279218946592,
        17.016636053937813
      ],
      [
        82.19124189649719,
        16.556664130107848
      ],
      [
        81.69271935417748,
        16.310219224507904
      ],
      [
        80.79199913933014,
        15.951972357644491
      ],
      [
        80.32489586784388,
        15.899184882058348
      ],
      [
        80.02506920768644,
        15.136414903214147
      ],
      [
        80.2332735533904,
        13.835770778859981
      ],
      [
        80.28629357292186,
        13.006260687710833
      ],
      [
        79.8625468281285,
        12.056215318240888
      ],
      [
        79.85799930208682,
        10.35727509199711
      ],
      [
        79.340511509116,
        10.30885427493962
      ],
      [
        78.88534549348918,
        9.546135972527722
      ],
      [
        79.18971967968828,
        9.216543687370148
      ],
      [
        78.2779407083305,
        8.933046779816934
      ],
      [
        77.94116539908435,
        8.252959092639742
      ],
      [
        77.53989790233794,
        7.965534776232333
      ],
      [
        76.59297895702167,
        8.89927623131419
      ],
      [
        76.13006147655108,
        10.299630031775521
      ],
      [
        75.74646731964849,
        11.308250637248307
      ],
      [
        75.39610110870957,
        11.781245022015824
      ],
      [
        74.86481570831681,
        12.741935736537897
      ],
      [
        74.61671715688354,
        13.99258291264968
      ],
      [
        74.44385949086723,
        14.617221787977696
      ],
      [
        73.5341992532334,
        15.99065216721496
      ],
      [
        73.11990929554943,
        17.928570054592498
      ],
      [
        72.82090945830865,
        19.208233547436166
      ],
      [
        72.8244751321368,
        20.419503282141534
      ],
      [
        72.6305334817454,
        21.356009426351008
      ],
      [
        71.17527347197395,
        20.757441311114235
      ],
      [
        70.4704586119451,
        20.877330634031384
      ],
      [
        69.16413008003883,
        22.0892980005727
      ],
      [
        69.64492760608239,
        22.450774644454338
      ],
      [
        69.34959679553435,
        22.84317963306269
      ],
      [
        68.1766451353734,
        23.69196503345671
      ],
      [
        68.84259931831878,
        24.35913361256094
      ],
      [
        71.04324018746823,
        24.3565239527302
      ],
      [
        70.84469933460284,
        25.21510203704352
      ],
      [
        70.28287316272558,
        25.72222870533983
      ],
      [
        70.16892662952202,
        26.491871649678842
      ],
      [
        69.51439293811312,
        26.940965684511372
      ],
      [
        70.61649620960193,
        27.989196275335868
      ],
      [
        71.77766564320032,
        27.913180243434525
      ],
      [
        72.8237516620847,
        28.961591701772054
      ],
      [
        73.45063846221743,
        29.97641347911987
      ],
      [
        74.42138024282026,
        30.979814764931177
      ],
      [
        74.40592898956501,
        31.69263947196528
      ],
      [
        75.25864179881322,
        32.2711054550405
      ],
      [
        74.45155927927871,
        32.7648996038055
      ],
      [
        74.10429365427734,
        33.44147329358685
      ],
      [
        73.74994835805195,
        34.31769887952785
      ],
      [
        74.24020267120497,
        34.74888703057125
      ],
      [
        75.75706098826834,
        34.50492259372132
      ],
      [
        76.87172163280403,
        34.65354401299274
      ],
      [
        77.83745079947457,
        35.494009507787766
      ]
    ]
  ];
  constructor(private changeDetector: ChangeDetectorRef, private elem: ElementRef) {
    this.data = require('../../../../assets/vehicledata.json');
  }

  ngOnInit() {
    this.currentDate = moment().format('YYYY-MM-DD');
    // this.options = {
    //   layers: [
    //     // tslint:disable-next-line:max-line-length
    //     tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })
    //   ],
    //   zoom: 13,
    //   center: [51.505, -0.09]
    // };
    const totalTrucks = Object.keys(this.data.wasteTrucks);
    this.legends.push({ status: 'All', total: totalTrucks.length });
    this.selected = totalTrucks.length;
    this.groupedData = _.groupBy(totalTrucks.map(i => this.data.wasteTrucks[i]), 'status');
    _.each(this.groupedData, (arr: any, key) => {
      this.legends.push({ status: key, total: arr.length });
    });
  }

  getStatus(num) {
    return _.findWhere(this.legends, { total: num }).status;
  }

  ngAfterViewInit() {
    //
  }

  onSelectLegend(event) {
    // this.map.removeLayer(this.markerGroup._layers);
    const regionMap = this.map;
    this.markerGroup.eachLayer((layer) => { regionMap.removeLayer(layer); });
    const data = _.map(this.data.wasteTrucks, (obj) => obj);
    let datajson;
    if (this.getStatus(event.value) === 'All') {
      datajson = this.data.wasteTrucks;
    } else {
      datajson = _.where(data, { status: this.getStatus(event.value) });
    }
    this.dropMarkers(datajson);
  }

  onMapReady(mapIns: Map): void {
    this.map = mapIns;

    this.map.on('click', function (e) {
      console.log(e);
    });
    // tslint:disable-next-line:no-unused-expression
    this.activetileLayer &&
      !this.map.hasLayer(this.activetileLayer) &&
      this.activetileLayer.addTo(this.map);
    this.drawRegion();
    const datajson = this.data;
    this.dropMarkers(datajson.wasteTrucks);
    // this._map.fitBounds(this.fitBounds);
  }

  dropMarkers(dataObj) {
    // const greenIcon = L.icon({
    //   iconUrl: '../../../../assets/truck.png',
    //   iconSize: [25, 25]
    // });
    const markers = [];

    _.each(dataObj, (item: any) => {
      const location = item.geocoordinates;
      let truckColor = '';
      if (item.status === 'Active') { truckColor = 'green'; }
      if (item.status === 'Inactive') { truckColor = 'red'; }
      if (item.status === 'Idle') { truckColor = 'orange'; }
      const layer = new L.Marker([location.latitude, location.longitude], {
        icon: L.icon({
          iconUrl: `../../../../assets/${truckColor}-truck.png`,
          iconSize: [25, 25]
        })
      });
      // layer.sid = item.sid;
      // layer.label = item.label;
      // layer.status = item.status;
      const out = [];
      for (const key of Object.keys(layer)) {
        out.push(key + ' : ' + layer[key]);
      }
      layer.bindPopup('<div style="max-height: 120px; overflow-y: auto;"><pre style="color: black;"><code>' +
        out.join('<br />') + '</code></pre></div>');

      layer.on('mouseover', (): void => {
        layer.openPopup();
      });
      layer.on('mouseout', (): void => {
        layer.closePopup();
      });
      if (this.showAction) {
        layer.on('click', (): void => {
          if (!this.showDetails) {
            this.showDetails = true;
            this.changeDetector.detectChanges();
            this.searchcontainer.nativeElement.style.marginLeft = '47%';
            console.log(this.chartContainer);
            this.drawChart();
          } else {
            this.showDetails = false;
            this.changeDetector.detectChanges();
            this.searchcontainer.nativeElement.style.marginLeft = '70%';
          }
        });
      }
      markers.push(layer);
      layer.addTo(this.map);
    }, this);
    if (markers.length > 0) {
      this.markerGroup = L.featureGroup(markers);
      this.map.fitBounds(this.markerGroup.getBounds());
    }

  }

  changetileLayer(tile: any): void {
    if (this.map && this.map.hasLayer(this.activetileLayer)) {
      this.activetileLayer.remove();
    }

    tile.provider && tile.provider === 'ESRI'
      // ? (this.activetileLayer = ESRI.basemapLayer(tile.layertype))
      ? ''
      : (this.activetileLayer = tileLayer(tile.url, tile.settings));
    if (this.map && this.activetileLayer) {
      this.activetileLayer.addTo(this.map);
    }
  }

  drawRegion() {
    if (this.regioncords.length) {
      // if (this.createdRegion) {
      //   this.createdRegion.remove();
      // }

      const latlngs = this.regioncords;
      const geoJson: any = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: latlngs
            }
          }
        ]
      };
      const exteriorStyle = {
        fillOpacity: 0.1
      };
      this.createdRegion = geoJSON(geoJson, { style: () => exteriorStyle }).addTo(this.map);
      this.map.fitBounds(this.createdRegion.getBounds());
    } else if (this.createdRegion) {
      this.createdRegion.remove();
    }

  }

  drawChart() {
    const element = document.getElementById('chartsDiv');
    this.chartoptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Activity Monitor',
        margin: -10
      },
      xAxis: {
        categories: [
          'Mon',
          'Tue',
          'Wed',
          'Thur',
          'Fri',
          'Sat',
          'Sun'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          //  text: 'Rainfall (mm)' ,
          // margin:4,
          // floating: false,
          // verticalAlign: null
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      legend: {
        enabled: true,
        align: 'center',
        floating: false,
        itemWidth: null,
        layout: 'horizontal',
        verticalAlign: 'top',
        itemStyle: {
          color: '#000000',
          fontSize: '8px',
          fontWeight: 'normal',
          textDecoration: 'underline',
          fontFamily: 'Lucida Grande,Lucida Sans Unicode, Arial, Helvetica, sans-serif'
        }
      },
      series: [{
        name: 'Day',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]


      }, {
        name: 'Week',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0],
        visible: false

      }, {
        name: 'Month',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0],
        visible: false

      }]
    };

    Highcharts.chart(this.chartContainer.nativeElement, this.chartoptions);
    // console.log(this.container);



  }

  addRoute() {
    console.log(this.map);
    const data = [
      { lat: 16.960168570809433, lng: 82.24521366724679 },
      { lat: 16.962219517057594, lng: 82.23834909390479 },
      { lat: 16.96574709222348, lng: 82.22865288405919 },
      { lat: 16.960742838015914, lng: 82.22187411788391 },
      { lat: 16.955328248897295, lng: 82.22144508205005 },
      { lat: 16.948436728029463, lng: 82.22573544038883 }
    ];
    const latlngs = [];
    data.forEach((item, index) => {
      latlngs.push([item.lat, item.lng]);
    });
    const polyline = L.polyline(latlngs, { color: 'blue' }).addTo(this.map);
    this.map.fitBounds(polyline.getBounds());
  }

  addGeoFence() {
    const data = [
      { lat: 16.961563216694344, lng: 82.22041539604876 },
      { lat: 16.968700360011653, lng: 82.2362039147354 },
      { lat: 16.95787148443053, lng: 82.24238203074319 },
      { lat: 16.948518771430518, lng: 82.23560326456797 },
      { lat: 16.951144141359723, lng: 82.22050120321553 },
      { lat: 16.962301554441787, lng: 82.22084443188263 },
      { lat: 16.961563216694344, lng: 82.22041539604876 }
    ];
    const latlongs = [];
    data.forEach((item, index) => {
      latlongs.push([item.lat, item.lng]);
    });
    const polygon = L.polygon(latlongs, { color: 'red' }).addTo(this.map);
    this.map.fitBounds(polygon.getBounds());
  }

  addGeo() {

  }

}
