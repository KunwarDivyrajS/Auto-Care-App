import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[AlphaNumeric]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AlphaNumericDirective,
    multi: true
  }]
})
export class AlphaNumericDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl) : ValidationErrors| null{
    const val = control.value;
    const pattern = /^[a-zA-Z0-9]+$/;
    if(val && !pattern.test(val)){
      return { alphanumeric : true};
    }
    return null;
  }
}
