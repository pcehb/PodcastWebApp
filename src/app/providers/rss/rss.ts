import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Events } from 'ionic-angular';


@Injectable()
export class RssProvider {

  private API_URL: string;

   constructor(public http: HttpClient, public events: Events) {
     this.API_URL = "https://api.rss2json.com/v1/api.json";
   }

   GetRSS(rss_url, order_dir) {
     const ORDER_DIR: any = order_dir;
     const RSS_URL: any = rss_url;
     const API_KEY: any = 'f09hfy72bicilx8spnyrbpa2lfozldtay0hihdgk';
     const COUNT: any = 100;

     const params = { params: new HttpParams().set('rss_url', RSS_URL).set('api_key',API_KEY).set('order_by', 'pubDate').set('order_dir', ORDER_DIR).set('count', COUNT)
     }
     return this.http.get(this.API_URL, params);
   }

   GetChartRSS(rss_url) {
     const RSS_URL: any = rss_url;
     const COUNT: any = 100;
     const API_KEY: any = 'f09hfy72bicilx8spnyrbpa2lfozldtay0hihdgk';

     const params = { params: new HttpParams().set('rss_url', RSS_URL).set('api_key',API_KEY).set('count', COUNT)
     }
     return this.http.get(this.API_URL, params);
   }

}
