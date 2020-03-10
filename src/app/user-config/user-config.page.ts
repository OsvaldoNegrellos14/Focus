import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.page.html',
  styleUrls: ['./user-config.page.scss'],
})
export class UserConfigPage implements OnInit {
  res:any = {};

  constructor(private nativeStorage: NativeStorage, private rotuer: Router, private afAuth: AngularFireAuth, private auth: AuthService) { }

  ngOnInit() {
    this.nativeStorage.getItem('user').then((res) => {
      this.res = res;
    })
  }

  logout() {
    this.nativeStorage.remove('user').then((res) => {
      this.rotuer.navigate(['/login'])
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          this.auth.logoutFirebase();
        }
      })
    })
  }

}
