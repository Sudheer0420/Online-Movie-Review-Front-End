import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {

  name:any
  movies:any=[];
  reviews:any=[];
remsg:any
rv:any;
msg:any
comment={
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
  this.http.get<any>("http://localhost:8069/review/getall/"+moviename).subscribe(
    (res) => {
      this.reviews=res;
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
  this.comment.review=this.remsg
  this.comment.moviename=moviename
  console.log(this.comment)

  this.http.post<any>("http://localhost:8069/review/addreview",this.comment).subscribe(
    (res) => {
      this.msg=res;
      console.log(res)
    })
    this.remsg=""
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
}


