import { Component } from '@angular/core';
import {iTunesDbService} from '../services/itunes-db.service';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  categories: any;
  podcasts: any;
  infos = [];
  ref = firebase.database().ref('infos/');

  constructor(public router: Router, private api: iTunesDbService){
    this.ref.on('value', resp => {
    this.infos = [];
    this.infos = snapshotToArray(resp);
  });
  }

  ngOnInit() {
      let startId = 1;
      this.api.getCategories().subscribe(response => {
        this.categories = response.Categories;
      })
      this.api.getFilmsByCategory(startId).subscribe(response => {
        this.podcasts = response.Products;
      })
    }

    changeCategory(catId) {
      this.api.getFilmsByCategory(catId).subscribe(response => {
        this.podcasts = response.Products;
      })
    }
  }
