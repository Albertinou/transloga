import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor(public fireservices:AngularFirestore) { }
  
  create_Newprice(record){
    return this.fireservices.collection('prices').add(record);
  }

  get_Allprices(){
    return this.fireservices.collection('prices').snapshotChanges();
  }

  update_price(recordid, record){
    this.fireservices.doc('prices/' + recordid).update(record);
  }

  delete_price(record_id){
    this.fireservices.doc('prices/' + record_id).delete();
  }
}
