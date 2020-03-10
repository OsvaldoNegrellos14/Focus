import { Component, OnInit } from '@angular/core';
import { DataFireService } from '../services/data-fire.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.page.html',
  styleUrls: ['./register-device.page.scss'],
})
export class RegisterDevicePage implements OnInit {

  data: any = {};
  data2:any = {};

  constructor(private dataFire: DataFireService, private storage: NativeStorage, private router: Router) { }

  ngOnInit() {
    
  }

  insertNewDevice() {
    this.storage.getItem('user').then((res) => {
      this.dataFire.insertDevice(res.userId, this.data.deviceId, this.data.phone, this.data);
      alert('Dispositivo registrado!');
      this.router.navigate(['/select-device']);
    })
  }

}
