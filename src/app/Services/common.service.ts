import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public router:Router, public http : HttpClient) { }

public carModelManagement =  {
  "carBrand" : "",
  "carClass" : "",
  "carModel" : "",
  "modelCode" : "",
  "carDesc" : "",
  "carFeatures" : "",
  "carPrice" : "",
  "dateManfacturing" : "",
  "isActive" : false,
  "sortOrder" : 0,
  "uploadImage" : [],
};

  public apiUrl= environment.apiUrl;
  public isLoggedIn : boolean = false;
  public loginModel = {
    "userName" : "",
    "userPassword" : ""
  }
  public  LogUserDetail= {
    "userName" : "",
    "userRole" : "",
    "token" : ""
  };

  public resetModel(){
    this.loginModel = {
      "userName" : "",
      "userPassword" : ""
    };
    this.LogUserDetail= {
      "userName" : "",
      "userRole" : "",
      "token" : ""
    };
  }

  GetLogStatus(){
    if(this.LogUserDetail.token==null || this.LogUserDetail.token==""){
    return  this.isLoggedIn= false;
    }
    else{
      return  this.isLoggedIn = true;
    }
  }

  public getDynamicNavBar(){
    return this.http.post(this.apiUrl+"api/common/dynamicNavBar/"+this.LogUserDetail.userRole, null);
   }

  public LogOutUser(){
    this.resetModel();
    this.router.navigate(['/login']);
  }
}
