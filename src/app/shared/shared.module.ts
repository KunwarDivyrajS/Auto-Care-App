import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphaNumericDirective } from '../Directives/alpha-numeric.directive';
import { AllowNumericOnlyPipe } from '../Pipes/allow-numeric-only.pipe';



@NgModule({
  declarations: [
    AlphaNumericDirective,
    AllowNumericOnlyPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AlphaNumericDirective,
    AllowNumericOnlyPipe
  ]
})
export class SharedModule { }
