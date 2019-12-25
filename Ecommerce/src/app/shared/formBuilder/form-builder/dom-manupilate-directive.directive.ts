import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDomManupilateDirective]'
})
export class DomManupilateDirectiveDirective implements OnInit {
  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
  }

  @HostListener('click')
  converter() {
    console.log(this.elementRef);
  }


}
