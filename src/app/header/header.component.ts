import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  movies:any;
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {

  }
  logout(){
    this.api.logout()
    this.router.navigate(["/login"])
  }

}
