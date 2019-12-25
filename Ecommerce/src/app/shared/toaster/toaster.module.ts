import {NgModule} from '@angular/core';
import {ToasterComponent} from './toaster/toaster.component';
import {ToasterService} from './toaster/toaster.service';
import {SharedModule} from '../shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ToasterComponent],
  imports: [CommonModule],
  providers: [ToasterService],
  exports: [ToasterComponent]
})

export class ToasterModule {
}
