import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import jwtDecode from 'jwt-decode'; 
import { LocalStorageService } from 'ngx-webstorage';
import { Authorities } from './authorities';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private localStorageService: LocalStorageService) { }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const expectedRole = activatedRouteSnapshot.data.expectedRole;
    const token = this.localStorageService.retrieve('authenticationToken');
    const tokenPayload = jwtDecode(token);

    let authorities: Authorities[];
    authorities = tokenPayload.authorities;
    let authority: string;
    authority = authorities[0].authority;

    if (!this.authService.isAuthenticated() || authority !== expectedRole) {
      this.router.navigate(['home']);
      return false;
    }
    else {
      return true;
    }
  }
}
