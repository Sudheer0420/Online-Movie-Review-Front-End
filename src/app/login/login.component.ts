import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup, FormControl, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../service/api.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:any ;
  name: string |undefined;
  form={
    username:String,
    password:String
  }

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  login() {
   let lform=this.loginForm.value;
   console.log(this.form)
    this.http.post<any>("http://localhost:8069/users/signIn",lform).subscribe(
      (res) => {
        console.log(res)
        this.api.setUserName(lform.username);

        if (res.role === "admin") {
          this.router.navigate(["admindash"]);
        }
        else {
          this.router.navigate(["dashboard"]);
        } this.loginForm?.reset();

      }, (err) => {
       alert("invalid credentials")
      }

    );

  }


}
