import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

@Output() isLogout = new EventEmitter<void>()
 isSignedIn = false

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn = true
    else 
    this.isSignedIn= false
}

async onSignin(email:string, password:string){
  await this.authService.signin(email,password)
  if(this.authService.isLoggedIn)
  this.isSignedIn = true
}



logout(){
  this.authService.logout()
  this.isLogout.emit()
}

}
