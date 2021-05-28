import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})


export class AdminGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth
  ){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>{
    const user = await this.afAuth.currentUser;
    const isAuthenticated = user ? true : false;
    if (!isAuthenticated){
      alert('Page is only for admin');
    }
    return isAuthenticated;
  }
  
}
