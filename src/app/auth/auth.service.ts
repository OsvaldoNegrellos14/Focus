import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { DataFireService } from '../services/data-fire.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any = {};
  isLoggedIn = false;
  user: any;
  redirectUrl: string;
  data: any;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private storage: NativeStorage,
    private fb: Facebook,
    private googlePlus: GooglePlus,
    private dataFire: DataFireService
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        // this.user = user;
        // this.storage.setItem('user', this.user);
      } else {
        this.storage.getItem('user').then((res) => {
          if (res) {
            this.user = res;
            this.storage.setItem('user', this.user);
          }
          else {
            this.storage.remove('user');
          }
        })
        // this.storage.remove('user');
      }
    })

  }

  loginWithFacebook() {
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
          this.storage.setItem('user', { userId: res.authResponse.userID, email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] });

          this.isLoggedIn = true;
          this.router.navigate(['/slide-show']);
        })
      })
      .catch((e) => {
        alert(JSON.stringify(e))
      });
  }

  loginWithGoogle() {
    this.googlePlus.login({}).then((res) => {
      this.storage.setItem('user', { userId: res.userId, email: res.email, first_name: res.familyName, picture: res.imageUrl, username: res.displayName });

      this.isLoggedIn = true;
      this.router.navigate(['/slide-show']);
    }).catch((err) => {
      alert(err + 'error')
    });
  }

  async logoutFirebase() {
    await this.afAuth.auth.signOut();
    this.storage.remove('user');
    this.router.navigate(['/login']);
    this.isLoggedIn = false;
  }

  async loginFirebase(email: string, pass: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, pass).then((res: any) => {
        this.dataFire.readUser(res.user.uid).subscribe((user) => {
          this.storage.setItem('user', { userId: res.user.uid, email: email, first_name: user[1] , picture: null, username:  user[2]})
          this.isLoggedIn = true;
          this.router.navigate(['/slide-show']);
        })

      })
    } catch (error) {
      alert(error.message);
    }
  }
  async signUpFirebase(email: string, pass: string, data: any) {
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, pass).then((res: any) => {
        this.dataFire.insertUser(data, res.user.uid)
        alert("Usuario registrado exitosamente");
        this.router.navigate(['/login']);
      })

    } catch (error) {
      alert(error.message);
    }
  }

}
