
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutComponent } from './components/about/about.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { SubjectComponent } from './components/subject/subject.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProgramsComponent,
    SubjectComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ProgramsComponent,
    SubjectComponent
    
  ]

})
export class PagesModule { }
