import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  data: number = 75;
  @ViewChild('chart', { static: false }) chart;
  historyChart: any;

  constructor() {}

  ionViewDidEnter() {
    this.createChart();
  }

  createChart() {
    this.historyChart = new Chart(this.chart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'],
        datasets: [{
          label: 'Humedad promedio al dia',
          data: [10, 5, 7, 2, 9],
          backgroundColor: '#F7D03D',
          borderColor: '9A33FF',
          borderWidth: 1,
          fill: 'start'
        }]
      },
      options: {
        options: {
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          yAxisID: 'Minutos'
        }
      }
    });
  }

  

}
