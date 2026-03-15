import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarManagementComponent } from './car-management/car-management.component';
import { authGuard } from '../Services/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { CalendarModule } from 'primeng/calendar';
import { SharedModule } from '../shared/shared.module';

const route : Routes = [
  {
    path: 'carModelManagement', component: CarManagementComponent, canActivate:[authGuard]
  },
];
@NgModule({
  declarations: [
    CarManagementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(route),
    QuillModule,
    CalendarModule,
    SharedModule
  ]
})
export class AdminModule { }
