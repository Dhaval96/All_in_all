import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {PanelService} from './panel.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy {

  // @ts-ignore
  @ViewChild('el') el: ElementRef;

  // @ts-ignore
  @ViewChild('el1') el1: ElementRef;


  // default panel
  @Input() smallPanel: boolean;
  @Input() largePanel: boolean;
  @Input() backgroundBlack: boolean;

  togglePanel = false;

  panelSubscribtion: Subscription;
  closePanelSubscribtion: Subscription;


  constructor(private  render: Renderer2, private panelService: PanelService) {
    this.smallPanel = true;
  }

  ngOnInit() {
    console.log('Dhaval!!');
    this.panelSubscribtion = this.panelService.getFlag().subscribe((flag) => {
      if (flag === true) {
        this.togglePanel = true;
        if (this.largePanel) {
          // Large Panel!!
          // This code is use to set background light black!!
          if (this.backgroundBlack) {
            this.render.addClass(this.el.nativeElement, 'opacity');
            this.render.setStyle(this.el.nativeElement, 'width', '100%');
          }
          this.render.addClass(this.el1.nativeElement, 'panel-right');
          this.render.setStyle(this.el1.nativeElement, 'width', '40%');
        } else {
          // Small Panel!!
          // This code is use to set background light black!!
          if (this.backgroundBlack) {
            this.render.addClass(this.el.nativeElement, 'opacity');
            this.render.setStyle(this.el.nativeElement, 'width', '100%');
          }
          this.render.addClass(this.el1.nativeElement, 'panel-right');
          this.render.setStyle(this.el1.nativeElement, 'width', '20%');
        }
      }
      // else {
      //   this.togglePanel = false;
      //   this.render.removeStyle(this.el.nativeElement, 'width');
      //   this.render.removeStyle(this.el1.nativeElement, 'width');
      //   this.render.removeClass(this.el.nativeElement, 'opacity');
      // }
    });


    this.closePanelSubscribtion = this.panelService.getClosePanel().subscribe((flag) => {
      if (flag) {
        this.render.removeStyle(this.el.nativeElement, 'width');
        this.render.removeStyle(this.el1.nativeElement, 'width');
      }
    });
  }

  dynamicClass() {

    // return { }
  }

  ngOnDestroy(): void {
    this.panelSubscribtion.unsubscribe();
    this.closePanelSubscribtion.unsubscribe();
  }
}
