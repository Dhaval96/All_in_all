import {NgModule} from '@angular/core';
import {FormBuilderComponent} from './form-builder/form-builder.component';
import {FormRoutingModule} from './form-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CollapseExpandDirective} from '../directives/collapse-expand.directive';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ConverterPipe} from './form-builder/converter.pipe';
import {MatButtonModule, MatDialogModule, MatExpansionModule, MatTabsModule} from '@angular/material';
import {DomManupilateDirectiveDirective} from './form-builder/dom-manupilate-directive.directive';
import {ViewFormComponent} from './form-builder/view-form/view-form.component';
import {AddEditFormComponent} from './form-builder/add-edit-form/add-edit-form.component';

@NgModule({
  declarations: [FormBuilderComponent, CollapseExpandDirective, ConverterPipe, DomManupilateDirectiveDirective, ViewFormComponent, AddEditFormComponent],

  imports: [CommonModule, ReactiveFormsModule,
    FormRoutingModule, DragDropModule,
    MatExpansionModule, FormsModule, MatDialogModule, MatButtonModule, MatTabsModule],
  providers: [],
  exports: [FormBuilderComponent],
  entryComponents: [AddEditFormComponent]
})
export class FormBuilderModule {
}


