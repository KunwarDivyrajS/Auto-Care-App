import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor(private router : Router, private commonService : CommonService) { }

  public navBar:any = [];
  ngOnInit(): void {
    //this.navBar = [];
    if(this.navBar!=undefined && this.navBar.length==0){
      this.getNavBar();
    }
  }

  public getNavBar(){
    this.commonService.getDynamicNavBar().subscribe(
      data =>{
        this.navBar = data;
      }
    )
  }

  public LogOutUser(){
    this.commonService.LogOutUser();
  }
}
