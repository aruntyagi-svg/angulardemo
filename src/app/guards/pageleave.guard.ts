import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class PageleaveGuard implements CanDeactivate  {
  component: Object;  route: ActivatedRouteSnapshot;

  canDeactivate():boolean
  {
   return window.confirm("Are you sure to leave this page ? ");
  }

  
}
