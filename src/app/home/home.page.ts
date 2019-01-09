import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  infos = [];
  currentUser = firebase.auth().currentUser;
  ref = firebase.database().ref('shows/'+this.currentUser.uid+'/');

  constructor(private route: ActivatedRoute, public router: Router, public alertController: AlertController) {
    this.ref.on('value', resp => {
      this.infos = [];
      this.infos = snapshotToArray(resp);
    });
  }

  async delete(key) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete this show?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            firebase.database().ref('shows/'+this.currentUser.uid+'/'+key).remove();
          }
        }
      ]
    });

    await alert.present();
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
}
