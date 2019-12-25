import {NgModule} from '@angular/core';
import {CoreRoutingModule} from './core-routing.module';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DashboardService} from './pages/dashboard/dashboard.service';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {ToasterModule} from '../shared/toaster/toaster.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, CoreRoutingModule, HttpClientModule, SharedModule],
  providers: [DashboardService],
  exports: [CoreRoutingModule, DashboardComponent]
})
export class CoreModule {
}
