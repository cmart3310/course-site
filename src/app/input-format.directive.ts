import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string;
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;

    if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else if (this.format === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else if (this.format === 'phone') {
      this.el.nativeElement.value = this.formatPhone(value);
    }
  }

  formatPhone(value) {
    let firstPart = value.slice(0, 3);
    let secondPart = value.slice(3, 6);
    const thirdPart = value.slice(6, value.length);
    firstPart = '(' + firstPart + ')';
    secondPart = ' ' + secondPart + '-';

    value = firstPart + secondPart + thirdPart;

    return value;
  }
}
