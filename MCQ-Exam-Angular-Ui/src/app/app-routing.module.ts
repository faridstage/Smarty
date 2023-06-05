import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { NewExamComponent } from './doctor/components/new-exam/new-exam.component';
import { StudentsComponent } from './doctor/components/students/students.component';
import { SubjectsComponent } from './doctor/components/subjects/subjects.component';
import { ExamComponent } from './student/components/exam/exam.component';
import { HomeComponent } from './pages/components/home/home.component';
import { AboutComponent } from './pages/components/about/about.component';
import { ProgramsComponent } from './pages/components/programs/programs.component';
import { SubjectComponent } from './pages/components/subject/subject.component';
// import { SubjectComponent } from './pages/components/subject/subject.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'programs', component:ProgramsComponent},
  {path: 'subjct' , component:SubjectComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'exam/:id' , component:ExamComponent},
  {path:'students' , component:StudentsComponent},
  {path:'subjects' , component:SubjectsComponent},
  {path:'new-exam' , component:NewExamComponent},
  {path:'**' , redirectTo:'exam' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
