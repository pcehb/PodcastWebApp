import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { iTunesDbService } from '../services/itunes-db.service';
import { RssProvider } from '../providers/rss/rss';
import * as firebase from 'Firebase';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  item:any;
  rssDataArrayAsc: any = [];
  rssDataArrayDesc: any = [];
  date: any;
  order: string = "desc";
  loader: any;
  currentUser = firebase.auth().currentUser;
  ref = firebase.database().ref('shows/'+this.currentUser.uid+'/');

  constructor(private route: ActivatedRoute, public alertController: AlertController,
  private api: iTunesDbService, private router: Router, public rssProvider: RssProvider) {
  }

  Get_RSS_Data(feedUrl) {
   this.rssProvider.GetRSS(feedUrl, "desc").subscribe(
       data => {
         this.rssDataArrayDesc = data;
       }
   );
   this.rssProvider.GetRSS(feedUrl, "asc").subscribe(
       data => {
         this.rssDataArrayAsc = data;
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
      localStorage.desc = String(desc);
      localStorage.episodeUrl = String(episodeUrl);
      localStorage.title = String(title);
      localStorage.desc = String(desc);
      localStorage.pubDate = String(pubDate);
      localStorage.author = String(author);
      localStorage.collectionName = document.getElementById("podcastName").innerHTML;
      localStorage.artworkUrl600 = (<HTMLImageElement>document.getElementById("artwork")).src;
  } else {
  }
}


async addShow() {
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'Are you sure want to add this to Your Shows?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (_blah) => {
          console.log('cancel');
        }
      }, {
        text: 'Okay',
        handler: () => {
          let data = {
              id: this.route.snapshot.paramMap.get('id'),
              title: document.getElementById("podcastName").innerHTML,
              artistName: document.getElementById("hosts").innerHTML,
              image: (<HTMLImageElement>document.getElementById("artwork")).src
            }
            let newInfo = firebase.database().ref('shows/'+this.currentUser.uid+'/').push();
            newInfo.set(data);
        }
      }
    ]
  });
  await alert.present();
}

back(){
  var backTo = localStorage.getItem("backTo");
  this.router.navigateByUrl(backTo);
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
