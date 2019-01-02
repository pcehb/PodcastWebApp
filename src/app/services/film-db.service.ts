import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmDbService {
  baseUrl: String;
  iTunesUrl: String;

  constructor(private http:HttpClient) {
    this.baseUrl = "http://ltwexternal.staff.eda.kent.ac.uk/API/";
    this.iTunesUrl = "https://itunes.apple.com/";
  }

  getCategories(): Observable <any>{
    return this.http.get(this.iTunesUrl + 'search?/genres');
  }

    getFilmsByCategory(category): Observable<any> {
      return this.http.get(this.baseUrl +'categories/' + category);
    }

    getThisProduct(productid): Observable<any> {
return this.http.get(this.baseUrl +
'product/' + productid);
}

getProductBySearch(keystr, searchType): Observable<any> {
  if (searchType == 1){
    console.log('search');
    return this.http.get(this.iTunesUrl +
    'search?term='+ keystr +'&entity=podcast&attribute=titleTerm');}
  else
    return this.http.get(this.iTunesUrl +
    'search?term='+ keystr +'&entity=podcast&attribute=authorTerm');
}
  }
