import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EmperadorGuard } from './auth/emperador.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    ,canActivate: [EmperadorGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'slide-show',
    loadChildren: () => import('./slide-show/slide-show.module').then( m => m.SlideShowPageModule)
    ,canActivate: [EmperadorGuard]
  },
  {
    path: 'user-config',
    loadChildren: () => import('./user-config/user-config.module').then( m => m.UserConfigPageModule)
    ,canActivate: [EmperadorGuard]
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
    ,canActivate: [EmperadorGuard]
  },
  {
    path: 'register-device',
    loadChildren: () => import('./register-device/register-device.module').then( m => m.RegisterDevicePageModule)
    ,canActivate: [EmperadorGuard]
  },
  {
    path: 'select-device',
    loadChildren: () => import('./select-device/select-device.module').then( m => m.SelectDevicePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
