import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class FirebaseService {

  private snapshotChangesSubscription: any;
  constructor(public afs: AngularFirestore){}

  getShow(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('people').doc(currentUser.uid).collection('shows').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    });
  }

  unsubscribeOnLogOut(){
    this.snapshotChangesSubscription.unsubscribe();
  }

  deleteShow(showKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('shows').doc(showKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  createShow(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('shows').add({
        id: value.id,
        title: value.title,
        image: value.image
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
}
