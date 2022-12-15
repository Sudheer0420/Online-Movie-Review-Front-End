
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { SignupComponent } from './signup/signup.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ShowmoviesComponent } from './showmovies/showmovies.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { ShowreviewComponent } from './showreview/showreview.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    AdminHeaderComponent,
    AdminDashboardComponent,
    AdminsignupComponent,
    SignupComponent,
    AddmovieComponent,
    ShowmoviesComponent,
    AddreviewComponent,
    ShowreviewComponent,
    DeletemovieComponent,
    MoviesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
