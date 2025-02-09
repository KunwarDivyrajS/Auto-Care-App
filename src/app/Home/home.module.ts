import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from '../Header/nav-bar/nav-bar.component';
import { authGuard } from '../Services/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate:[authGuard],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
