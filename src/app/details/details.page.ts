import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FilmDbService} from '../services/film-db.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  item:any;

  constructor(private route: ActivatedRoute, private api: FilmDbService) {
  }

  ngOnInit() {
    this.api.getThisProduct(this.route.snapshot.paramMap.get('id')).subscribe(
      response =>{
        this.item = response.Product[0];
      })
  }

}
