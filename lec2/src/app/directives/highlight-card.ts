import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
})
export class HighlightCard {
  @Input() overColor: string;
  @Input() outColor: string;

  constructor(private element: ElementRef) {
    this.overColor = "red";
    this.outColor = "black";
    element.nativeElement.style.backgroundColor = 'wight';
  }

  @HostListener("mouseover")
  over() {
    // this.element.nativeElement.style.backgroundColor = 'gray';
    this.element.nativeElement.style.backgroundColor = this.overColor;
  }

  @HostListener("mouseout")
  out() {
    this.element.nativeElement.style.backgroundColor = this.outColor;
  }

}
