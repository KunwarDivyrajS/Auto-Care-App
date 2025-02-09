import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { CommonService } from './common.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthErrorInterceptor implements HttpInterceptor {

  constructor(public commonService : CommonService,
     public router:Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userToken = this.commonService.LogUserDetail.token;
    var clonedReq = request;

    if(userToken){
      clonedReq = request.clone({
        setHeaders:{
          "Authorization": `Bearer ${userToken}`,
          "Content-Type" : "application/json"
        },
        withCredentials : true,
      });
    }
    return next.handle(clonedReq).pipe(
      catchError((error)=>{
        if (error instanceof HttpErrorResponse) {
        if(error.status==401){
          alert("Authorization Fail");
          this.router.navigate(['/login']);
        }
        else if (error.status === 403) {
          alert("You do not have permission.");
        } else if (error.status === 500) {
          alert("An internal server error occurred.");
        } else {
          // Handle other errors
          alert(`An error occurred: ${error.message}`);
        }
      }
      return throwError(error);
    })
    );
   // return next.handle(request);
  }
}
