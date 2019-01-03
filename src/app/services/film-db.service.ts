import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Jsonp } from '@angular/http';

class SearchItem {
  constructor(public collectionId: string,
              public artistName: string,
              public collectionName: string,
              public feedUrl: string,
              public artworkUrl100: string,
              public artworkUrl600: string,
              public contentAdvisoryRating: string,
              public trackCount: string)
              {
  }
}

@Injectable()


export class FilmDbService {
  baseUrl: String;
  iTunesUrl: String;
  results: SearchItem[];

  constructor(private http:HttpClient, private jsonp: Jsonp) {
    this.baseUrl = "http://ltwexternal.staff.eda.kent.ac.uk/API/";
    this.iTunesUrl = "https://itunes.apple.com/";
    this.results = [];
  }

  getCategories(): Observable <any>{
    return this.http.get(this.iTunesUrl + 'search?/genres');
  }

    getFilmsByCategory(category): Observable<any> {
      return this.http.get(this.baseUrl +'categories/' + category);
    }

    getThisProduct(productid): Observable<any> {
      return this.http.get(this.iTunesUrl + 'lookup?id=' + productid);
    }

  getProductBySearch(keystr, searchType): Promise<any>{
    if (searchType == 1){

      return new Promise((resolve, reject) => {
            this.results = [];
            //let apiURL = '${this.iTunesUrl}search?term=${keystr}&entity=podcast&attribute=titleTerm&callback=JSONP_CALLBACK';
            this.jsonp.request(this.iTunesUrl + 'search?term='+ keystr +'&entity=podcast&attribute=titleTerm&callback=JSONP_CALLBACK')
                .toPromise()
                .then(
                    res => { // Success
                      this.results = res.json().results.map(item => {
                        return new SearchItem(
                            item.collectionId,
                            item.artistName,
                            item.collectionName,
                            item.feedUrl,
                            item.artworkUrl100,
                            item.artworkUrl600,
                            item.contentAdvisoryRating,
                            item.trackCount
                        );
                      });
                      resolve();
                    },
                    msg => { // Error
                      reject(msg);
                    }
                );
          });


      // return this.http.get(this.iTunesUrl +
      // 'search?term='+ keystr +'&entity=podcast&attribute=titleTerm');
    } else
    return new Promise((resolve, reject) => {
          this.results = [];
          //let apiURL = '${this.iTunesUrl}search?term=${keystr}&entity=podcast&attribute=titleTerm&callback=JSONP_CALLBACK';
          this.jsonp.request(this.iTunesUrl + 'search?term='+ keystr +'&entity=podcast&attribute=titleTerm&callback=JSONP_CALLBACK')
              .toPromise()
              .then(
                  res => { // Success
                    this.results = res.json().results.map(item => {
                      return new SearchItem(
                          item.collectionId,
                          item.artistName,
                          item.collectionName,
                          item.feedUrl,
                          item.artworkUrl100,
                          item.artworkUrl600,
                          item.contentAdvisoryRating,
                          item.trackCount
                      );
                    });
                    resolve();
                  },
                  msg => { // Error
                    reject(msg);
                  }
              );
        });

    // return this.http.get(this.iTunesUrl +
    // 'search?term='+ keystr +'&entity=podcast&attribute=authorTerm');
  }
    // return this.jsonp.request(this.iTunesUrl +
    // 'search?term='+ keystr +'&entity=podcast&attribute=authorTerm&callback=JSONP_CALLBACK').map(res => {
    //       return res.json();
    //   }).toPromise();
    // return this.jsonp.get(this.iTunesUrl +
    // 'search?term='+ keystr +'&entity=podcast&attribute=authorTerm')
    // .toPromise()
    // .then(data => data.json().results)
    // }
  }
