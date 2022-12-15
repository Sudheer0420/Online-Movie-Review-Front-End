import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { O_RDWR } from 'constants';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  public signupForm: any;
pic:any;
pic1:any
movie={
  moviename:String,
  hero:String,
  heroine:String,
  image:String

}
  constructor(

    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({

      moviename: new FormControl (null, Validators.required),
      hero: new FormControl(null, Validators.required),
      heroine:new FormControl (null, Validators.required),
      image:new FormControl(null,Validators.required)
    });

  }
  onFileUpload(fileInput:any){
      let reader=new FileReader();

      reader.onload=(e:any)=>{
        let image1=new Image()
        image1.src=e.target.result
        image1.onload=rs=>{
          this.pic=e.target.result
        }

      }
      reader.readAsDataURL(fileInput.target.files[0])
    }
  signUp() {
    this.signupForm.value.image=this.pic
    if (this.signupForm.valid) {
      let signUpRequestBody = this.signupForm?.value;
      console.log(signUpRequestBody)
      this.http
        .post<any>("http://localhost:8069/movie/addmovie", signUpRequestBody)
        .subscribe(
          (res) => {
            this.pic1=res.image
            console.log(res)

            this.signupForm?.reset();
            alert("Movie Added Successfully");

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
