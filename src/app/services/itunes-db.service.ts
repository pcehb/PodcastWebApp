import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class iTunesService {
  baseUrl: String;

  constructor(private http:HttpClient) {
    this.baseUrl = "https://itunes.apple.com/";
  }

  getCategories(): Observable <any>{
    return this.http.get(this.baseUrl + 'search?/genreIndex');
  }

    getFilmsByCategory(category): Observable<any> {
      return this.http.get(this.baseUrl +'search?/genreIndex=' + category
      + 'entity=podcast');
    }

    getThisProduct(productid): Observable<any> {
      return this.http.get(this.baseUrl +
        'lookup?upc=' + productid);
      }
    getProductBySearch(keystr, searchType): Observable<any> {
      if (searchType == 1){
        console.log('search');
        return this.http.get(this.baseUrl +
        'search?term='+ keystr +'&entity=podcast');}
      else
        return this.http.get(this.baseUrl +
        'search?term='+ keystr +'&entity=podcastAuthor');
    }
  }
