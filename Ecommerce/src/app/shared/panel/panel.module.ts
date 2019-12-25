import {NgModule} from '@angular/core';
import {PanelComponent} from './panel/panel.component';
import {PanelService} from './panel/panel.service';
import {CommonModule} from '@angular/common';
import {AppClosePanelDirective} from './panel/appClosePanel.directive';

@NgModule({
  declarations: [PanelComponent, AppClosePanelDirective],
  imports: [
    CommonModule
  ],
  providers: [PanelService],
  exports: [PanelComponent, AppClosePanelDirective]
})

export class PanelModule {
}
