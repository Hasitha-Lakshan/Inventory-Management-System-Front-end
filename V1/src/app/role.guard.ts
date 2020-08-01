import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Authorities } from './authorities';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private localStorageService: LocalStorageService) { }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot): boolean {

    const expectedRole = activatedRouteSnapshot.data.expectedRole;
    const token = this.localStorageService.retrieve('authenticationToken');
    const tokenPayload = decode(token);

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
