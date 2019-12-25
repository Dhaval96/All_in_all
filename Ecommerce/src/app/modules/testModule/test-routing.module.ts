import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test/test.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {path: '', redirectTo: 'test', pathMatch: 'full'},
  {path: '', component: TestComponent}

];


@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})

export class TestRoutingModule {
}
