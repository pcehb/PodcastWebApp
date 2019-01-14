import { Component, OnInit } from '@angular/core';
import { RssProvider } from '../providers/rss/rss';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: 'charts.page.html',
  styleUrls: ['charts.page.scss']
})

export class ChartPage implements OnInit {
  item:any;
  rssDataArray: any = [];
  rssDataArrayDesc: any = [];
  date: any;
  loader: any;
  url: any = "https://rss.itunes.apple.com/api/v1/gb/podcasts/top-podcasts/all/100/explicit.rss";

  constructor( public http: HttpClient, private router: Router, public rssProvider: RssProvider) {
  }

  Get_Chart_RSS_Data(feedUrl) {
  console.log(feedUrl);
   this.rssProvider.GetChartRSS(feedUrl).subscribe(
       data => {
         this.rssDataArray = data;
       }
   );
 }

getTitle(title){
  var array = title.split("-");
  return array[0];
}

getName(title){
  var array = title.split("-");
  return array[1];
}

details(link){
    var podcastID = link.split("id");
    podcastID = podcastID[1].split("?");
    podcastID = podcastID[0];
    localStorage.backTo = String("tabs/(Charts:Charts)");
    this.router.navigate(['details/' + podcastID]);
}

  ngOnInit() {
        this.Get_Chart_RSS_Data(this.url);
  }

}
