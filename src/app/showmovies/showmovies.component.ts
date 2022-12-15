
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
 selector: 'app-showmovies',
 templateUrl: './showmovies.component.html',
 styleUrls: ['./showmovies.component.css']
})
export class ShowmoviesComponent implements OnInit {
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

deletereview(rr:any){
  this.http.delete("http://localhost:8069/review/delete/"+rr).subscribe(
    (data)=>{
      alert(data)
    }
  )
}

showreviews(moviename:string){
 this.rv=moviename
 this.http.get<any>("http://localhost:8069/review/approved/"+moviename+"/false").subscribe(
 (res) => {
this.reviews=res;
if(this.reviews.length<1){
 this.rmsg="no reviews found"
}
else{
 this.rmsg="The Reviews are"
 }
 })
console.log(this.reviews)
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

 this.approved="true"

 this.comment.review=this.remsg

 this.comment.moviename=moviename

 this.comment.name=this.username

 this.comment.approved=this.approved;

 this.http.post<any>("http://localhost:8069/review/addreview",this.comment).subscribe(


(res) => {
  console.log(res)
 this.msg=res;


 })

 this.remsg="";
alert("review under process")

}
 delete(name:string){
 this.http.delete<any>("http://localhost:8069/movie/delete1/"+name).subscribe(
 (res) => {
 this.msg=res;
 console.log(res)
 })
alert("deleted successfully")
 this.ngOnInit()
 }
 approve(approve:any){

 if(approve==="false"){

return true;


 }

 else{

 return false;

 }


 }


approvereview(review:any){
 this.http.put<any>("http://localhost:8069/review/approvereview",review).subscribe(
 (res) => {
this.msg=res;
 console.log(res)
 })
alert("Review Approved")
this.showreviews(review.moviename)

 }

}


// import { HttpClient } from '@angular/common/http';
// import { IfStmt } from '@angular/compiler';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ApiService } from '../service/api.service';

// @Component({
//   selector: 'app-showmovies',
//   templateUrl: './showmovies.component.html',
//   styleUrls: ['./showmovies.component.css']
// })
// export class ShowmoviesComponent implements OnInit {
//   name:any
//     movies:any=[];
//     reviews:any=[];
// remsg:any
// rv:any;
// msg:any
// comment={
//   review:String,
//   moviename:String

// }

//   constructor(private api:ApiService,private http:HttpClient) { }

//   ngOnInit(): void {
//     this.api.getData().subscribe((data)=>{
//       this.movies=data;
      
//       console.log(this.movies)

//     })
   

//   }
  
//   showreviews(moviename:string){
//     this.rv=moviename
//     this.http.get<any>("http://localhost:8069/review/getall/"+moviename).subscribe(
//       (res) => {
//         this.reviews=res;
//       })
//   }
//   check(movie:string){
//     if(this.rv===movie){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }

//   addreview(moviename:any){
//     this.comment.review=this.remsg
//     this.comment.moviename=moviename
//     console.log(this.comment)

//     this.http.post<any>("http://localhost:8069/review/addreview",this.comment).subscribe(
//       (res) => {
//         this.msg=res;
//         console.log(res)
//       })
//       this.remsg=""
//   }
//   delete(name:string){
//     this.http.delete<any>("http://localhost:8069/movie/delete1/"+name).subscribe(
//       (res) => {
//         this.msg=res;
//         console.log(res)
//       })
//       alert("deleted successfully")
//       this.ngOnInit()
//   }
// }
