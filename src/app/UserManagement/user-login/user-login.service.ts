import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/Services/common.service';

@Injectable({
  providedIn: 'root'
})

export class UserLoginService {

 constructor(private http: HttpClient
 ) { }

 public userName:string = "";
 public userPassword: string = "";
 public apiUrl= environment.apiUrl;
 
 public UserLogin(userName: string,userPassword: string){
  var param = {
    "userName" : userName,
    "userPassword" : userPassword
  }
  return this.http.post(this.apiUrl+"api/auth/userLogin", param);
 }
  
}
