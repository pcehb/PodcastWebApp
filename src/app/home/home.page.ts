import { Component } from '@angular/core';
import {iTunesDbService} from '../services/itunes-db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  categories: any;
  podcasts: any;

  constructor(private api: iTunesDbService){
  }

  ngOnInit() {


  }
}
