import { AuthInterceptor } from './interceptor/auth.interceptor';
import { StudentService } from './shared/student.service';
import { AfterGuard } from './shared/after-login.service';
import { BeforeGuard } from './shared/before-login.service';
import { TokenService } from './shared/token.service';
import { AuthService } from './shared/auth.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';


import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoute } from './modules/app-route.module';
import { StudentsComponent } from './components/students/students.component';
import { StudentNewComponent } from './components/students/student-new/student-new.component';
import { StudentEditComponent } from './components/students/student-edit/student-edit.component';
import { multicast } from 'rxjs/operators';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    StudentsComponent,
    StudentNewComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoute,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  providers: [AuthService, 
              TokenService, 
              BeforeGuard, 
              AfterGuard, 
              StudentService, 
                {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
