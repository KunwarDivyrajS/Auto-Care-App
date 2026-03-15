import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeModule } from './Home/home.module';
import { LoaderComponent } from './loader/loader.component';
import { NavBarComponent } from './Header/nav-bar/nav-bar.component';
import { AuthErrorInterceptor } from './Services/auth-error.interceptor';
import { UserLoginComponent } from './UserManagement/user-login/user-login.component';
import { AlphaNumericDirective } from './Directives/alpha-numeric.directive';
import { QuillModule } from 'ngx-quill';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllowNumericOnlyPipe } from './Pipes/allow-numeric-only.pipe';
import { SharedModule } from './shared/shared.module';
import { AllowNumericOnlyDirective } from './Directives/allow-numeric-only.directive';
//import Aura from '@primeng/themes/aura';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    LoaderComponent,
    AllowNumericOnlyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthErrorInterceptor, multi: true },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function provideAnimationsAsync(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

function providePrimeNG(arg0: { theme: { preset: any; }; }): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

