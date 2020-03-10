import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataFireService {

  constructor(private dataFire: AngularFireDatabase) { }

  insertUser(data: any, uid: any) {
    return this.dataFire.database.ref('/users/' + uid + '/informationAccount/').set(data);
  }

  readUser(uid:any) {
    return this.dataFire.list('/users/' + uid + '/informationAccount/').valueChanges();
  }

  insertDevice(uid: any, deviceId:any, phone: any, data:any) {
    this.dataFire.database.ref('/devices/' + deviceId + '/phone/').set(phone);
    return this.dataFire.database.ref('/users/' + uid + '/devices/' + deviceId).set(data);
  }

  readDevices(uid:any) {
    return this.dataFire.list('/users/' + uid + '/devices/').valueChanges();
  }

}
