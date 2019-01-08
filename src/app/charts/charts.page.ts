import { Component, OnInit } from '@angular/core';
import { RssProvider } from '../providers/rss/rss';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chart',
  templateUrl: 'charts.page.html',
  styleUrls: ['charts.page.scss']
})

export class ChartPage implements OnInit {
  item:any;
  rssDataArray: any = [];
  date: any;
  loader: any;
  url: any = "https://rss.itunes.apple.com/api/v1/gb/podcasts/top-podcasts/all/100/explicit.rss";

  constructor( public http: HttpClient, public rssProvider: RssProvider) {
  }

  Get_RSS_Data(feedUrl) {
  console.log(feedUrl);
   this.rssProvider.GetChartRSS(feedUrl).subscribe(
       data => {
         this.rssDataArray = data;
       }
   );
 }

getDate(pubDate){
  var date = new Date(pubDate);
  var months = Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  var string = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
  return string;
}

playEpisode(episodeUrl, title, desc, pubDate, author){
  if (typeof(Storage) !== "undefined") {
      localStorage.episodeUrl = String(episodeUrl);
      localStorage.title = String(title);
      localStorage.desc = String(desc);
      localStorage.pubDate = String(pubDate);
      localStorage.author = String(author);
      localStorage.collectionName = document.getElementById("podcastName").innerHTML;
      localStorage.artworkUrl600 = (<HTMLImageElement>document.getElementById("artwork")).src;
      this.rssProvider.currentlyPlaying();
  } else {
  }
}

  ngOnInit() {
        this.Get_RSS_Data(this.url);
        this.item = this.url;
  }

}
