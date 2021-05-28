import { Component, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  email : string;
  password: string;

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
}

  login(){
    
    this.auth.signInWithEmailAndPassword(this.email,this.password)
    .catch(error => console.log(error.code))
    .then(res => console.log(res));
  }

  logout(){
    this.auth.signOut();
  }
}