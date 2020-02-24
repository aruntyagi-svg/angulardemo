import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('name')!=''&& localStorage.getItem('name')!=null){
      alert("you have Rights"+localStorage.getItem('name'));
      return true;
    }
      else{
        alert("you dont have Rights");
        this.router.navigate(['/login']);
        return false;
      }

  }
  
}
