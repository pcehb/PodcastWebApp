import { Component } from '@angular/core';
import {FilmDbService} from '../services/film-db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  categories: any;
  products: any;

  constructor(private api: FilmDbService){
  }

  ngOnInit() {
      let startId = 1;
      this.api.getCategories().subscribe(response => {
        this.categories = response.Categories;
      })
      this.api.getFilmsByCategory(startId).subscribe(response => {
        this.products = response.Products;
      })
    }

    changeCategory(catId) {
      this.api.getFilmsByCategory(catId).subscribe(response => {
        this.products = response.Products;
      })
    }
  }
