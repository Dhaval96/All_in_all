import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material.module';
import { WorkComponent } from './work/work.component';
import { WorkerComponent } from './worker/worker.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddworkComponent } from './work/addwork/addwork.component';
import { ListOfWorkComponent } from './work/list-of-work/list-of-work.component';
import { ListOfWorkerComponent } from './worker/list-of-worker/list-of-worker.component';
import { AddworkerComponent } from './worker/addworker/addworker.component';
import { UserComponent } from './user/user.component';
import { DialogOfLendedMoneyComponent } from './worker/dialog-of-lended-money/dialog-of-lended-money.component';
import { RestrictiionDirective } from './worker/ristriction.directive';
import { MaterialFileUploadComponentComponent } from './common/material-file-upload-component/material-file-upload-component.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { WorkerDetailComponent } from './worker/worker-detail/worker-detail.component';
import { ExportAsPdfDirective } from './common/directive/export-as-pdf.directive';
import { ExportAsModule } from 'ngx-export-as'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToasterComponent } from './common/toaster/toaster.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { GlobalInterseptorService } from './auth/global-interseptor.service';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { ChartsModule } from 'ng2-charts'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WorkComponent,
    WorkerComponent,
    HeaderComponent,
    SidenavComponent,
    LoginComponent,
    SignupComponent,
    AddworkComponent,
    ListOfWorkComponent,
    ListOfWorkerComponent,
    AddworkerComponent,
    UserComponent,
    DialogOfLendedMoneyComponent,
    RestrictiionDirective,
    MaterialFileUploadComponentComponent,
    ToasterComponent,
    WorkDetailComponent,
    WorkerDetailComponent,
    ExportAsPdfDirective,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ExportAsModule,
    HttpClientModule,
    ChartsModule

  ],
  providers: [

    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 2500,
        horizontalPosition: 'end',
        verticalPosition: 'end'
      }
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterseptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogOfLendedMoneyComponent,
    WorkDetailComponent,
    WorkerDetailComponent,
    ToasterComponent]
})
export class AppModule { }
