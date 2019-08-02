import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material/material.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentsService } from './services/students.service';


const appRoutes:Routes =[
  {path:'', redirectTo:'dashboard', pathMatch:'full' },
  {path:'dashboard',  component: DashboardComponent},
  {path:'student-list',  component: StudentListComponent},
  {path:'add-student',  component: AddStudentComponent},
  {path:'**',  component: PageNotFoundComponent}
]


@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    MaterialModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent, 
    DashboardComponent, 
    PageNotFoundComponent, StudentListComponent, AddStudentComponent, EditStudentComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [StudentsService]
})
export class AppModule { }
