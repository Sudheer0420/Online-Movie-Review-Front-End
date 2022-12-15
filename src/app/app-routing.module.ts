
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowmoviesComponent } from './showmovies/showmovies.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"admindash",component:AdminDashboardComponent},
  {path:"adminsignup",component:AdminsignupComponent},
  {path:"addmovie",component:AddmovieComponent},
  {path:"movies",component:ShowmoviesComponent},
  {path:"deletemovie",component:DeletemovieComponent},
  {path:"usermovies",component:MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
