import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD:MCQ-Exam-Angular-Ui/src/app/shared/shared.module.ts
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatrialModule } from './matrial.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
=======
>>>>>>> bf5af0f2310239cad5f39dee314e83840e43c107:client/src/app/shared/shared.module.ts



@NgModule({
<<<<<<< HEAD:MCQ-Exam-Angular-Ui/src/app/shared/shared.module.ts
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    MatrialModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule,
    BrowserModule
  ],
  exports:[
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    MatrialModule,
    CommonModule,
    NavbarComponent,
    FooterComponent
=======
  declarations: [],
  imports: [
    CommonModule
>>>>>>> bf5af0f2310239cad5f39dee314e83840e43c107:client/src/app/shared/shared.module.ts
  ]
})
export class SharedModule { }
