import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MainNavigationModel, SubNavigationModel} from './dashboard.model';
import {DashboardService} from './dashboard.service';
import {ToasterService} from '../../../shared/toaster/toaster/toaster.service';
import {MessagePosition} from '../../../shared/toaster/toaster/toaster.model';
import {PanelService} from '../../../shared/panel/panel/panel.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() modules: MainNavigationModel;

  constructor(private render2: Renderer2, private  el: ElementRef, private  navigationService: DashboardService,
              private toasterService: ToasterService, private  panelSerive: PanelService) {
  }

  mainNavigationModel: MainNavigationModel[] = [];
  subNavigationModel: SubNavigationModel;
  toggle = false;
  // @ts-ignore
  @ViewChild('nav') nav: ElementRef;

  flag: boolean;

  ngOnInit() {
    /*CONFIG NAV*/
    // this.mainNavigationModel = [
    //   new MainNavigationModel(1, 'Common Component', false,
    //     'fa fa-anchor', [new SubNavigationModel(1, 'panel', '/panel', 'fa fa-anchor')])
    // ];

    //console.log(this.mainNavigationModel);


    /*  this.mainNavigationModel = [{
         new MainNavigationModel(1,'Common component', this.subNavigationModel)
      }]*/
    this.build_navigation();
  }

  /*@HostListener('click')*/
  collapsePanel(event: Event) {
    /*console.log('qd');*/
    console.log(this.toggle);
    this.toggle = !this.toggle;

    if (this.toggle) {
      // panel open //
      this.render2.addClass(this.nav.nativeElement, 'sidenav');
      this.render2.removeClass(this.nav.nativeElement, 'noSidenav');
    } else {
      // panel close //
      this.render2.addClass(this.nav.nativeElement, 'noSidenav');
      this.render2.removeClass(this.nav.nativeElement, 'sildenav');
    }
  }

  closePanel(): void {
    this.toggle = false;
  }

  toggleFun(module: MainNavigationModel): void {
    module.toggle_Icon = !module.toggle_Icon;
  }

  build_navigation() {
    this.navigationService.getAll().subscribe((data) => {
      this.mainNavigationModel.length = 0;
      if (data.length > 0) {
        this.mainNavigationModel = data;
      }
    });
  }

  show_toaster(): void {
    // this.toasterService.success('Hello Dhaval!', MessagePosition.bottomLeft);
    this.panelSerive.openPanel();
  }

  close(): void {
    this.panelSerive.panel();
  }

}
