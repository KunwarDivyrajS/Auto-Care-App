import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.css']
})
export class CarManagementComponent implements OnInit {

  public dateOfManufacturing : Date = new Date();
  public parentContent: string = '';
  constructor(public commonServe : CommonService){
  }
  ngOnInit(): void {
    
  }
  public carBrands = ['Audi', 'Jaguar', 'Land Rover', 'Renault'];
  public carClasses = ['A-Class', 'B-Class', 'C-Class'];
  public quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],               
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      
      [{ 'indent': '-1'}, { 'indent': '+1' }],          
      [{ 'direction': 'rtl' }],                         
      [{ 'size': ['small', false, 'large', 'huge'] }],  
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],          
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],                                        
      ['link']                        
    ]
  };

  public formatDates(event:any) {
    var dateEvent = event.value;
    console.log(dateEvent);
      var date = new Date(this.commonServe.carModelManagement.dateManfacturing);
      console.log(date);
       var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
       console.log(mnth);
       var day = ("0" + date.getDate()).slice(-2);
       console.log(day);
       var showDate = [date.getFullYear(), mnth, day].join("-");
      return showDate;
    }

}
