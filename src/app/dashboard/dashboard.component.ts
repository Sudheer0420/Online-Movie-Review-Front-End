import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from "rxjs";
import { ApiService } from "../service/api.service";


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  username:any
  movies:any=[];
  questions: any = [];
  answers: any = [];
  userid:number | undefined

  constructor(
    private api: ApiService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.username = this.api.getUserName();
    if(this.username===null){
      alert("need to login")
      this.router.navigate(["/login"])
    }
    console.log(this.api.getUserName())
  }
  // getData() {
  //   console.log("work");
  //   this.api.getApprovedQuestions().subscribe((res) => {

  //     this.questions = res;
  //   });
  // }

  // addAnswer(q_id) {
  //   this.api.setQid(q_id);

  //   this.router.navigate(["addAnswer"]);
  // }
  // adqid(q_id){
  //   this.api.setQid(q_id);
  //   this.api.setQuId(q_id)
  //   this.router.navigate(["dashboardquestions"]);
  // }

  getAllQA() {
    console.log("hello");
    this.http
      .get<any>("http://localhost:9090/questions/approved/true")
      .subscribe(
        (res) => {
          this.movies=res
        },
        (err) => {
          alert("Something went wrong");
        }
      );
  }
  convertImage(img: any) {
    return "data:image/jpeg;base64," + img;
  }
}
