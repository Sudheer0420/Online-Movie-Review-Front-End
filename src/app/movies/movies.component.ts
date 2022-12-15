
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  name:any
  username:any
  approved:any
    movies:any=[];
    reviews:any=[];
remsg:any
rmsg:any
rv:any;
msg:any
comment={
  approved:String,
  name:String,
  review:String,
  moviename:String


}

  constructor(private api:ApiService,private http:HttpClient) { }

  ngOnInit(): void {
    this.api.getData().subscribe((data)=>{
      this.movies=data;
      console.log(this.movies)

    })
   

  }
  
showreviews(moviename:string){
  this.rv=moviename
  this.http.get<any>("http://localhost:8069/review/approved/"+moviename+"/true").subscribe(
    (res) => {
      this.reviews=res;
      if(this.reviews.length<1){
        this.rmsg="no reviews found"

      }
      else{
        this.rmsg="The Reviews are"
      }
console.log(this.reviews)
    })
}


check(movie:string){
    if(this.rv===movie){
      return true;
    }
    else{
      return false;
    }
  }

  addreview(moviename:any){

  this.username=this.api.getUserName();

  this.approved="false"

  this.comment.review=this.remsg

  this.comment.moviename=moviename

  this.comment.name=this.username

  this.comment.approved=this.approved;
console.log(this.comment)

  this.http.post<any>("http://localhost:8069/review/addreview",this.comment).subscribe(

    (res) => {

      this.msg=res;


    })
alert("Review Under Process")

    this.remsg=""

}
 delete(name:string){
this.http.delete<any>("http://localhost:8069/movie/delete1/"+name).subscribe(
 (res) => {
this.msg=res;

//         console.log(res)

 })
alert("deleted successfully")
this.remsg=""


      
//       this.ngOnInit()
  }
}


