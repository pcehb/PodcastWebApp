import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Events} from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
   myAuth: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private events: Events,
    private router: Router,
    public afAuth: AngularFireAuth
  ) {
    const authObserver = afAuth.authState.subscribe( user => {
      if (user) {
        console.log(user.email);
        this.router.navigate(['']);
        authObserver.unsubscribe();
      } else {
        this.router.navigate(['Login']);
        authObserver.unsubscribe();
      }
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  changeSearch(byTitle) {
    this.events.publish('functionCall:changeSearch', byTitle);
  }
}
