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

 moreDesc() {
  var x = document.getElementById("less");
  //var y = document.getElementById("description more");
  if (x.style.display === "none") {
    x.style.display = "block";
    //y.style.display = "none";
  } else {
    x.style.display = "none";
    //y.style.display = "block";
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
