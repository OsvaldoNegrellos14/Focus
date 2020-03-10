import { Component, ViewChild } from '@angular/core';
import { LinearGauge } from 'ng-canvas-gauges';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data:number;
  name:string;
  @ViewChild(IonSegment, {static: true}) segment: IonSegment  

  constructor() {
    
  }

  ngOnInit() {
    this.segment.value = 'Fahrenheit';
    this.data = 50;
    this.name = 'fahrenheit'
    console.log('inicio')
  }

  segmentChanged(ev: any) {
    console.log(ev.detail.value)
    var value = ev.detail.value;
    if(value == 'Fahrenheit') {
      console.log('entro al primero')
      this.data = 50;
      this.name = 'Fahrenheit'
    } else {
      console.log('entro al segundo')
      this.data = 75;
      this.name = 'Celsius'
    }
  }

}
