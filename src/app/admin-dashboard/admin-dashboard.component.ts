import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  username:any;
users:any=[]
  
  constructor(
   private api: ApiService,
   private http: HttpClient,
   private router:Router
  ) { }

  ngOnInit(): void {
    this.username = this.api.getUserName();
    if(this.username===null){
      alert("login")
      this.router.navigate(["/login"])
      this.router.navigate(["/home"])
    }
    
    
    console.log(this.username);
    console.log(this.api.getUserId());
  }
  userThere:boolean=false

  getall(){
    this.http.get<any>("http://localhost:8069/users").subscribe(
      (data)=>{
        this.users=data
      }
    )
  }
  
}
