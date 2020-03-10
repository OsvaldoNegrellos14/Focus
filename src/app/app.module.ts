import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
// import { IonicStorageModule } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AngularFireDatabaseModule } from '@angular/fire/database';


var firebaseConfig = {
  apiKey: "AIzaSyD1SbhNefjSbVUi59J7Ig0HcIp4TwGXAb8",
  authDomain: "focus-abd6d.firebaseapp.com",
  databaseURL: "https://focus-abd6d.firebaseio.com",
  projectId: "focus-abd6d",
  storageBucket: "focus-abd6d.appspot.com",
  messagingSenderId: "20321693418",
  appId: "1:20321693418:web:413cd23f79809be24db193"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    // IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule, 
    IonicModule.forRoot({ mode:'md', scrollAssist: false, scrollPadding: false }), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Facebook,
    GooglePlus,
    NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
