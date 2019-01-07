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
      // document.getElementById("podcastName").innerHTML = url;
      var episodeUrl = localStorage.getItem("episodeUrl");
      var title = localStorage.getItem("title");
document.getElementById("playing").innerHTML = '<h3>'+title+'</h3><audio src='+episodeUrl+' controls autoplay style="width:100%"> Your browser does not support the audio element.</audio>';

    });

}


  ngOnInit() {
  }

}
