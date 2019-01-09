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
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

import {RssProvider} from './providers/rss/rss'
import {HttpModule, JsonpModule} from "@angular/http";
import {iTunesDbService} from './services/itunes-db.service';
import {Events} from 'ionic-angular';


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
    AngularFireAuthModule, AngularFireDatabaseModule, AngularFireStorageModule],
  providers: [StatusBar, SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RssProvider, iTunesDbService, Events, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
