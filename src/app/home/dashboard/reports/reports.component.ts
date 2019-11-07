import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
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
    this.chartoptions =
      {
        chart: {
          type: 'column'
        },
        title: {
          text: '',
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
          title: ''
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
          align: 'right',
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
          },
          position: 'right'
        },
        series: [{
          name: 'Day',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]
        }, {
          name: 'Week',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]

        }, {
          name: 'Month',
          data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0]

        }]
      };
    Highcharts.chart(this.chartContainer.nativeElement, this.chartoptions);
  }

}
