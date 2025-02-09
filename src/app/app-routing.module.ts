import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './UserManagement/user-login/user-login.component';
import { HomeModule } from './Home/home.module';
import { authGuard } from './Services/auth.guard';

const routes: Routes = [ 
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "login", component: UserLoginComponent },
  { path: "home", loadChildren: ()=> import('./Home/home.module').then(m=>m.HomeModule), canLoad:[authGuard]}, 
  { path: "admin", loadChildren: ()=> import('./Admin/admin.module').then(m=>m.AdminModule), canLoad:[authGuard]}, 
  { path: "**", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
