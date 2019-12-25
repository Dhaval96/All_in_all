import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
// import {mod} from 'ngx-bootstrap/chronos/utils';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '', component: DashboardComponent,
    children: [{
      path: 'test',
      loadChildren: () => import('../modules/testModule/test.module').then(m => m.TestModule)
    }, {
      path: 'formbuilder',
      loadChildren: () => import('../shared/formBuilder/formBuilder.module').then(m => m.FormBuilderModule)
    }]
  },
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]

})

export class CoreRoutingModule {
}
