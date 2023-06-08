import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProgramsComponent } from './programs/programs.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './shared/components/text-input/text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProgramsComponent,
    SubjectsComponent,
    TestErrorComponent,
    ServerErrorComponent,
    TextInputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      }
    ),
    NgxSpinnerModule,
    ReactiveFormsModule,

  ],
  exports: [
    NgxSpinnerModule,
    ReactiveFormsModule,
    TextInputComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: Window, useValue: window },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
