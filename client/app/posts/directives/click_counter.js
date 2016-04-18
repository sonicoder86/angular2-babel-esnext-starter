import { Directive, HostListener, ElementRef } from 'angular2/core';

@Directive({
  selector: '[click-counter]'
})
export class ClickCounter {
  numberOfClicks = 0;

  constructor(element: ElementRef) {
    this._element = element;
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    let fullId = this._element.nativeElement.id;

    console.log(fullId.substring(5), this.numberOfClicks++, event);
  }
}
