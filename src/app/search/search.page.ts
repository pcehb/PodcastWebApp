import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {Events} from '@ionic/angular';
import{ FilmDbService} from '../services/film-db.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  searchQuery: string = '';
  podcasts: any;
  search_type: any;

  @ViewChild('mySearchBar', {read: ElementRef}) mySearchBar:ElementRef;

  constructor(private events: Events, private api: FilmDbService, private renderer: Renderer2) {
    this.search_type = 1;
    this.events.subscribe('functionCall:changeSearch', eventData => {
      this.changeSearch(eventData);
    });
  }

  onInput() {
    if (this.searchQuery != "") {
      this.api.getProductBySearch(this.searchQuery, this.search_type);
    }
  }

  changeSearch(byTitle) {
    if (byTitle) {
      this.search_type = 1;
      this.renderer.setAttribute(this.mySearchBar.nativeElement, "placeholder", "Search by title");
    }
    else {
      this.search_type = 0;
      this.renderer.setAttribute(this.mySearchBar.nativeElement, "placeholder", "Search by hosts");
    }
    this.onInput();
  }
}
