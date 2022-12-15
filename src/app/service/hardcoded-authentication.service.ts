import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService implements CanActivate {

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {
    return true;
    
  }
}
