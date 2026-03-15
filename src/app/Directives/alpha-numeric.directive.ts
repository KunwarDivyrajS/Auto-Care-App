import { Directive, ElementRef, HostListener } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[alphaNumeric]',
  providers: []
})
export class AlphaNumericDirective {

  constructor(private elementRef : ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent): void {
    const inputValue = this.elementRef.nativeElement.value;
    const filterValue = inputValue.replace(/[^a-zA-Z0-9]/g, '');
    this.elementRef.nativeElement.value = filterValue;
  }

}
