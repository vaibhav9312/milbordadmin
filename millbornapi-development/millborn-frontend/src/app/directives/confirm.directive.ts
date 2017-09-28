import { Directive, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {
  @Output('confirm-click') click: any = new EventEmitter();
  
  @HostListener('click', ['$event']) clicked(e) {
    alert("clicked");
  }

}
