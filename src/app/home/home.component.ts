import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm:FormGroup | undefined;
  searchString:string | undefined;
 username :string="undefined";
 noQuestions: boolean=false;
 movies: any = [];

  constructor(
    private api:ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient

  ) {console.log(this.username,"username",this.searchString); }
  ngOnInit(): void {
    this.api.getData().subscribe((data)=>{
      this.movies=data;
    })
  }
  adqid(){
    alert("login required to view");
  }
  submit()
  { console.log(this.username,"this is search 1");
    //this.api.setSearchString(this.searchString);
    this.api.setUserName(this.username)
    console.log(this.username,"search2",this.searchString);
    this.router.navigate(["homesearch"]);
    this.searchForm?.reset();

  }

}



