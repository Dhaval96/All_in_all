import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {FormBuilderComponent} from './form-builder/form-builder.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

const route: Routes = [
  {path: '', component: FormBuilderComponent},
  {path: '', redirectTo: 'formBuilder', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
  providers: []
})

export class FormRoutingModule {
}
