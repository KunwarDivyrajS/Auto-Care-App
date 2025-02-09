import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from '../UserManagement/user-login/user-login.service';
import { CommonService } from './common.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private commonService:CommonService, private router : Router){}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  export const authGuard: CanActivateFn = (route, state) => {
    const commonService = inject(CommonService);
    const router = inject(Router);
      if(commonService.GetLogStatus()){
        return true;
      }
      else {
        router.navigate(['/login'])
        return false;
      }
  }
