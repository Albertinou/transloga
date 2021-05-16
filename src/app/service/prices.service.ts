import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor(public fireservices:AngularFirestore) { }
  create_Newemployee(Record){
    return this.fireservices.collection('prices').add(Record);
  }

  get_Allprices(){
    return this.fireservices.collection('prices').snapshotChanges();
  }
}
