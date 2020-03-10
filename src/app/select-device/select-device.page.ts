import { Component, OnInit } from '@angular/core';
import { DataFireService } from '../services/data-fire.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-select-device',
  templateUrl: './select-device.page.html',
  styleUrls: ['./select-device.page.scss'],
})
export class SelectDevicePage implements OnInit {

  userDevices: any = [];

  constructor(private dataFire: DataFireService, private storage: NativeStorage) { }

  ngOnInit() {
    this.storage.getItem('user').then((res:any) => {
      this.dataFire.readDevices(res.userId).subscribe((userDevices: any) => {
        this.userDevices = userDevices;
      })
    })

  }

}
