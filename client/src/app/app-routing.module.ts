import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProgramsComponent } from './programs/programs.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AccountModule } from './account/account.module';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  // { path: 'account', loadChildren: () => import('./account/account-routing.module').then(m => m.AccountRoutingModule) }و  

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'test-error', component: TestErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'programs',
    canActivate: [AuthGuard],
    component: ProgramsComponent
  },
  { path: 'subjcts', canActivate: [AuthGuard], component: SubjectsComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
