import {ContentChild, Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClosePanel]'
})
export class AppClosePanelDirective {

  // @ts-ignore
  @ContentChild('el1') el1: ElementRef;

  constructor(private render: Renderer2, private elementRef: ElementRef) {
  }

  @HostListener('click')
  closePanel(): void {
    console.log(this.elementRef);
    // console.log(this.el1);
    this.render.setStyle(this.elementRef.nativeElement, 'width', '0');
    // this.render.setStyle();
    // this.render.removeClass(this.el1.nativeElement, 'opicity');
    // this.render.removeStyle(this.el.nativeElement, 'width');
    // this.render.removeStyle(this.el1.nativeElement, 'width');
  }
}
