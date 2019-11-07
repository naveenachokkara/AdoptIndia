import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-piechart-report',
  templateUrl: './piechart-report.component.html',
  styleUrls: ['./piechart-report.component.scss']
})
export class PiechartReportComponent implements OnInit {
  chartoptions: any;
  private chartContainer: ElementRef;

  @ViewChild('chartContainer') set content(content: ElementRef) {
    this.chartContainer = content;
  }
  constructor() { }

  ngOnInit() {
    this.drawChart(null);
  }

  drawChart(type) {
    this.chartoptions ={
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: ' '
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: false
          },
          showInLegend: false
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Available',
          y: 7
          // sliced: true,
          // selected: true
      }, {
          name: 'dormant',
          y: 3
      }]
  }]
      };
    Highcharts.chart(this.chartContainer.nativeElement, this.chartoptions);
  }
}
