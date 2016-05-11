import { Directive, HostListener, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[click-counter]'
})
export class ClickCounterDirective {
  numberOfClicks = 0;

  constructor(containerRef: ViewContainerRef) {
    this._containerRef = containerRef;
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    let fullId = this._containerRef.element.nativeElement.id;

    console.log(fullId.substring(5), this.numberOfClicks++, event);
  }
}
