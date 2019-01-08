import { Component, OnInit } from '@angular/core';
import { RssProvider } from '../providers/rss/rss';
import { Events } from 'ionic-angular';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.page.html',
  styleUrls: ['./playing.page.scss'],
})
export class PlayingPage implements OnInit {

  constructor(public rssProvider: RssProvider, public events: Events) {
    events.subscribe('url', (_url) => {
      var episodeUrl = localStorage.getItem("episodeUrl");
      var title = localStorage.getItem("title");
      var desc = localStorage.getItem("desc");
      var pubDate = localStorage.getItem("pubDate");
      var collectionName = localStorage.getItem("collectionName");
      var artworkUrl600 = localStorage.getItem("artworkUrl600");

      var date = new Date(pubDate);
      var months = Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
      var publishDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()

      document.getElementById("title").innerHTML = title;
      document.getElementById("collectionName").innerHTML = collectionName;
      (<HTMLImageElement>document.getElementById("artworkUrl600")).src = artworkUrl600;
      document.getElementById("publishDate").innerHTML = publishDate;
      document.getElementById("desc").innerHTML = desc;

      document.getElementById("footer").innerHTML = '<audio src='+episodeUrl+
      ' controls autoplay style="width:100%">Your browser does not support the audio element.</audio>';
    });
  }

  ngOnInit() {

    var episodeUrl = localStorage.getItem("episodeUrl");
    var title = localStorage.getItem("title");
    var desc = localStorage.getItem("desc");
    var pubDate = localStorage.getItem("pubDate");
    var collectionName = localStorage.getItem("collectionName");
    var artworkUrl600 = localStorage.getItem("artworkUrl600");

    var date = new Date(pubDate);
    var months = Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var publishDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()

    document.getElementById("title").innerHTML = title;
    document.getElementById("collectionName").innerHTML = collectionName;
    (<HTMLImageElement>document.getElementById("artworkUrl600")).src = artworkUrl600;
    document.getElementById("publishDate").innerHTML = publishDate;
    document.getElementById("desc").innerHTML = desc;

    document.getElementById("footer").innerHTML = '<audio src='+episodeUrl+
    ' controls autoplay style="width:100%">Your browser does not support the audio element.</audio>';
  }

}
