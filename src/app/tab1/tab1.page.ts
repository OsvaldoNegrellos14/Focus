import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // @ViewChild('chart', { static: false }) chart;
  data: number = 75;
  // historyChart: any;

  constructor() { }

  ionViewDidEnter() {
    // this.createChart();
  }

  // createChart() {
  //   this.historyChart = new Chart(this.chart.nativeElement, {
  //     type: 'bar',
  //     data: {
  //       labels: ['data1', 'data2', 'data3', 'data4', 'data5'],
  //       datasets: [{
  //         label: 'Time on in minutes',
  //         data: [10, 5, 7, 2, 9],
  //         backgroundColor: '#F7D03D',
  //         borderColor: '9A33FF',
  //         borderWidth: 1,
  //         fill: 'start'
  //       }]
  //     },
  //     options: {
  //       options: {
  //       },
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }],
  //         yAxisID: 'Minutos'
  //       }
  //     }
  //   });
  // }




}
