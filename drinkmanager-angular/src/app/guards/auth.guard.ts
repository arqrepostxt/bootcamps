import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialService } from '../services/credential.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  ):
  Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree=> {

    const router: Router = inject(Router);
    const tokenStorage: CredentialService = inject(CredentialService);
  
    if (tokenStorage.getLoggedIn() == false) {
      return router.navigate(['login']);    
    }
    else {
        return true;
    }
  
};
