import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  info:any = {};
  data: any = {};

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  loginWithFacebook() {
    this.auth.loginWithFacebook();
  }

  async loginFirebase(email:string, pass:string) {
    await this.auth.loginFirebase(email, pass);
    this.data = {}
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

}
