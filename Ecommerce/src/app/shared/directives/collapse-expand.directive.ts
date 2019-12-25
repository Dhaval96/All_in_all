import {ContentChild, Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCollapseExpandDirective]'
})
export class CollapseExpandDirective implements OnInit {

  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }

  // @ContentChild('childrenComponent', {static: false, read: ElementRef}) el;

  ngOnInit(): void {
  }

  @HostListener('click')
  collapse_expand(): void {
    console.log('Dhaval!!');
    //  console.log(this.elementRef.nativeElement.parentNode);
    console.log(this.elementRef.nativeElement.nextSibling);
    // console.log(this.el);
    console.log(this.elementRef);

    const element = this.elementRef.nativeElement.nextSibling;
    //console.log(style.display);
    // if (style.display === undefined) {
    //   console.log('----------------------->>1');
    //   this.elementRef.nativeElement.nextSibling.style.display = 'none';
    //   this.elementRef.nativeElement.nextSibling.style.transition = '4s';
    // } else {
    //   console.log('----------------------->>2');
    //   this.elementRef.nativeElement.nextSibling.style.display = 'visible';
    //   this.elementRef.nativeElement.nextSibling.style.transition = '4s';
    // }

    if (element.className === 'childrenComponent') {
      console.log('------->>');
      element.className = '';
      this.elementRef.nativeElement.nextSibling.style.display = 'visible';
      this.elementRef.nativeElement.nextSibling.style.transition = '4s';
    } else {
      console.log('<<--------');
      //element.className = 'childrenComponent';
      element.className = 'childrenComponent';

    }

  }
}
