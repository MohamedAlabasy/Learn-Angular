import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
})
export class Highlight {
  @Input() outColor: string = 'yellow';
  @Input() overColor: string = 'red';

  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.backgroundColor = this.outColor;
  }


  @HostListener('mouseover')
  over() {
    this.ele.nativeElement.style.backgroundColor = this.overColor;
  }

  @HostListener('mouseleave')
  out() {
    this.ele.nativeElement.style.backgroundColor = this.outColor;
  }

}
