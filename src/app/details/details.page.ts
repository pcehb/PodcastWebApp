import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FilmDbService} from '../services/film-db.service';
import { RssProvider } from '../providers/rss/rss';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  item:any;
  rssDataArray: any = [];
  date: any;

  constructor(private route: ActivatedRoute, private api: FilmDbService, public rssProvider: RssProvider) {
  }

  Get_RSS_Data(feedUrl) {
   this.rssProvider.GetRSS(feedUrl).subscribe(
       data => {
         this.rssDataArray = data;
         console.log(data);
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
  //document.getElementById("footer").innerHTML = '<h3>'+title+'</h3><audio src='+episodeUrl+' controls autoplay style="width:100%"> Your browser does not support the audio element.</audio>';
  if (typeof(Storage) !== "undefined") {
      localStorage.episodeUrl = String(episodeUrl);
      localStorage.title = String(title);
      localStorage.desc = String(desc);
      localStorage.pubDate = String(pubDate);
      // localStorage.collectionName = String(collectionName);
      localStorage.author = String(author);
      // localStorage.artworkUrl600 = String(artworkUrl600);
      this.rssProvider.currentlyPlaying();
  } else {
  }
}

  ngOnInit() {
    this.api.getThisProduct(this.route.snapshot.paramMap.get('id')).subscribe(
      response =>{
        this.Get_RSS_Data(response.results[0].feedUrl);
        console.log(response.results[0].feedUrl);
        this.item = response.results[0];
      });
  }

}
