import { Component, OnInit } from '@angular/core';
import { UserLoginService } from './user-login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoaderService } from 'src/app/loader/loader.service';
import { CommonService } from 'src/app/Services/common.service';


@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  // UserList: UserLogin[];
  LogUser: any;
  status: boolean = false;
  showerror: boolean = false;
  IsLoggedIn: boolean = false;
  errorMessage: string = '';
  constructor(public userLogin: UserLoginService, public router:Router, 
    public loaderService : LoaderService,
    public commonService : CommonService
  ) {
  }
  ngOnInit(): void {
    //this.showerror=false;
    this.commonService.resetModel();
  }
  showPassword = false;
 
  passwordType = 'password';

 public togglePassword() {
    this.showPassword = !this.showPassword;
    this.passwordType = this.showPassword? 'text' : 'password';
  }

 public login() {
  this.loaderService.show();
    this.showerror=false;
    if (this.commonService.loginModel.userName && this.commonService.loginModel.userPassword) {
      this.userLogin.UserLogin(this.commonService.loginModel.userName, this.commonService.loginModel.userPassword).subscribe({
      next : (data:any)=> {
          if(data){
            this.commonService.LogUserDetail = data;
            if(this.commonService.LogUserDetail!=null){
              this.router.navigate(['/home'])
            }
          } else {
            this.loaderService.hide();
            this.errorMessage="Authentication Fails";
            this.status = true;
          }         
      },
      error : (error:any)=>{
        this.loaderService.hide();
        this.errorMessage="Authentication Fails";
        this.status = true;
        setTimeout(()=>{
          this.status = false;
        },10000);
      },
      complete: () => {
        console.log('Subscription completed');
      }
    })
    }
    else {
      this.loaderService.hide();
      this.showerror = true;
      this.errorMessage="Please! Fill the Required Data";
      setTimeout(()=>{
        this.status = false;
      },10000);

    }

  }

 public closePopup(){
    this.status=false;
  }

}
