import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkComponent } from './work/work.component';
import { WorkerComponent } from './worker/worker.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddworkComponent } from './work/addwork/addwork.component';
import { ListOfWorkComponent } from './work/list-of-work/list-of-work.component';
import { AddworkerComponent } from './worker/addworker/addworker.component';
import { ListOfWorkerComponent } from './worker/list-of-worker/list-of-worker.component';
import { AuthGuard } from './auth/auth-guard.service';
import { WorkerResolver } from './worker/worker-resolver.service';
import { UserComponent } from './user/user.component';


const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'work', component: WorkComponent, canActivate: [AuthGuard], children: [
      { path: 'addWork', component: AddworkComponent, canActivateChild: [AuthGuard] },
      { path: 'editWork', component: AddworkComponent, canActivateChild: [AuthGuard] },
      { path: 'listOfWork', component: ListOfWorkComponent, canActivateChild: [AuthGuard] },
      { path: '', redirectTo: 'listOfWork', pathMatch: 'full' }
    ]
  },
  {
    path: 'worker', component: WorkerComponent, canActivate: [AuthGuard], children: [
      { path: 'addWorker', component: AddworkerComponent, canActivateChild: [AuthGuard] },
      { path: 'editWorker', component: AddworkerComponent, canActivateChild: [AuthGuard] },
      { path: 'listOfWorker/:id', component: ListOfWorkerComponent, canActivateChild: [AuthGuard] },
      { path: 'listOfWorker', component: ListOfWorkerComponent, canActivateChild: [AuthGuard], resolve: { workId: WorkerResolver } },
      { path: '', redirectTo: 'listOfWorker', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
