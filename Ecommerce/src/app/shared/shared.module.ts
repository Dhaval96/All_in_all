import {NgModule} from '@angular/core';
import {MaterialModule} from './angularMaterial/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule} from './toaster/toaster.module';
import {PanelModule} from './panel/panel.module';
import {FormBuilderModule} from './formBuilder/formBuilder.module';


@NgModule({
  declarations: [],
  imports: [MaterialModule, BrowserAnimationsModule, ToasterModule, PanelModule, FormBuilderModule],
  providers: [],
  exports: [MaterialModule, BrowserAnimationsModule, ToasterModule, PanelModule, FormBuilderModule]
})

export class SharedModule {
}
