import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class EmperadorGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private storage: NativeStorage) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    let url = state.url;
    return this.checkLoggin(url);
  }

  async checkLoggin(url: any): Promise<boolean> {
    var desicion = null
    await this.storage.getItem('user').then((data) => {
      alert(JSON.stringify(data))
      desicion = true
    },(error) => {
      this.authService.redirectUrl = url;
      this.router.navigate(['/login']);
      desicion = false
    });
    return desicion;
  }


}
