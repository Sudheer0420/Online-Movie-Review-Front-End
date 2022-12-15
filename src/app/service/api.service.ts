import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

const TOKEN = 'u_token';
const USERNAME = 'u_username';
const USERID = '0';
const QUID ='0'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  searchString: string | undefined;
  username: string | undefined;
  qid:number | undefined;
  userid:number | undefined;

  token: string | undefined;
  setUserName(name: string) {
    window.localStorage.removeItem(USERNAME)
    window.localStorage.setItem(USERNAME,name);
  }
  setUserID(name: number) {
    window.localStorage.removeItem(USERID)
    window.localStorage.setItem(USERNAME,String(name));
  }
  setMovieName(name: String) {

  window.localStorage.removeItem(USERID)
  window.localStorage.setItem(USERID,String(name));
  }
  
  getMovieName(){
    return Number(window.localStorage.getItem(USERID));
  }
  getUserName() {
    return window.localStorage.getItem(USERNAME)
  }
  getUserId() {
    return window.localStorage.getItem(USERID)
  }



  setToken(importtoken: string) {
    window.localStorage.removeItem(TOKEN)
    window.localStorage.setItem(TOKEN,importtoken);
  }
  getToken() {
    return window.localStorage.getItem(TOKEN);
  }
  setuserid(id: number) {
    this.userid = id;
  }
  getuserid() {
    return this.userid;
  }
  getData() {
    return this.http.get<any>("http://localhost:8069/movie/getAll").pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  
  
  setSearchString(search:string){
    this.searchString=search;
  }
  getSearchString(){
    return this.searchString;
  }
  
  logout(){
    window.localStorage.removeItem(USERNAME);
    window.localStorage.removeItem(TOKEN);
  }
}