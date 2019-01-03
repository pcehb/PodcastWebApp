import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RssProvider {

  private API_URL: string;

   constructor(public http: HttpClient) {
     this.API_URL = "https://api.rss2json.com/v1/api.json";
   }

   GetRSS(rss_url) {
    const RSS_URL: any = rss_url;
   const API_KEY: any = '4qhx5xcwzsxwdaksndbuj2zhvqtup1lflzkliksv';
       const COUNT: any = 20;
     const params = { params: new HttpParams().set('rss_url', RSS_URL).set('api_key',API_KEY).set('order_by', 'pubDate').set('order_dir', 'desc').set('count', COUNT)
     }
     return this.http.get(this.API_URL, params);
   }

}
