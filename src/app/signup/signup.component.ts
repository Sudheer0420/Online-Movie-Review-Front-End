import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder,FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({

      username: new FormControl (null, Validators.required),
      email: new FormControl(null, Validators.required),
      password:new FormControl (null, Validators.required),
      role: new FormControl("user")
    });

  }

  signUp() {
    if (this.signupForm.valid) {
      let signUpRequestBody = this.signupForm?.value;
      console.log(signUpRequestBody)
      this.http
        .post<any>("http://localhost:8069/users/signUp", signUpRequestBody)
        .subscribe(
          (res) => {
            console.log(res);

            alert("Sign Up Is Done Succesfully");
            this.signupForm?.reset();
            this.router.navigate(["login"]);
          },
          (err) => {
            alert("username already exists change user name");
          }
        );
    }
    else{
      alert("Please fill required details ");
    }
  }


}
