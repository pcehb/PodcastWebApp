import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {RssProvider} from './providers/rss/rss'
import {HttpModule, JsonpModule} from "@angular/http";

import {FilmDbService} from './services/film-db.service';


export const firebaseConfig = {
  apiKey: "AIzaSyCl86O7FaRaqVKF1PzjW1PKic5vZOP2ftE",
  authDomain: "podcastapp-b2ddb.firebaseapp.com",
  databaseURL: "https://podcastapp-b2ddb.firebaseio.com",
  projectId: "podcastapp-b2ddb",
  storageBucket: "podcastapp-b2ddb.appspot.com",
  messagingSenderId: "669640669327"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), JsonpModule, HttpModule, AppRoutingModule, HttpClientModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RssProvider, FilmDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
