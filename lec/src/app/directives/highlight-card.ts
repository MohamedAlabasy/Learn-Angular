import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
})
export class HighlightCard {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.transition = 'box-shadow 0.3s ease-in-out';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.boxShadow = 'none';
  }

}
