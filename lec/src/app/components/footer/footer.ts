import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer implements AfterViewInit {
  @ViewChild('myInput') myInput!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.myInput.nativeElement.value = 'ngAfterViewInit';
  }

}
