import { AfterGuard } from './../shared/after-login.service';
import { BeforeGuard } from './../shared/before-login.service';
import { RegisterComponent } from './../components/register/register.component';
import { HomeComponent } from './../components/home/home.component';
import { Injectable, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from '../components/login/login.component';
import { StudentsComponent } from '../components/students/students.component';
import { StudentNewComponent } from '../components/students/student-new/student-new.component';

const appRoutes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'auth', canActivate: [BeforeGuard], component: LoginComponent, children: [
        {path: 'register', component: RegisterComponent}
        
    ]},
    {path: 'students',canActivate: [AfterGuard], component: StudentsComponent},
    {path: 'students-new', component: StudentNewComponent}
    
]
@Injectable()
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    providers: [

    ]
})
export class AppRoute {

}