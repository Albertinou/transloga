import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public fireservices:AngularFirestore) { }

  create_newcontact(record){
    return this.fireservices.collection('contacts').add(record);
  }
}

