import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authSvc: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onLogout() {
    this.authSvc.logout();
    this.router.navigateByUrl('/auth');
  }

  // isLoggedIn() {
  //   return this.fAuth.authState.pipe(first()).toPromise();
  // }

  // async doSomething(){
  //   const user = await this.isLoggedIn()
  //   if(user){
  //     console.log(user.email);
  //   }else{
  //     console.log("gk ad");
  //   }
  // }
}
