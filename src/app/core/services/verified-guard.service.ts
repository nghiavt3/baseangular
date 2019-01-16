import { Injectable } from '@angular/core';
import { Router, CanActivate,RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class VerifiedGuardService implements CanActivate {
  
    constructor(private router: Router,
                private authService: AuthService) { }
  
    canActivate(router, state: RouterStateSnapshot) {
      
      if (this.authService.isVerified()) {
        return true;
      }
  
      this.router.navigate(['/verification'], { queryParams: { returnUrl: state.url } });
      return false;
    }
}
