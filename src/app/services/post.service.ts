import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import  {environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl:string;
  constructor(private http:HttpClient) {
    this.baseUrl=environment.baseUrl;
   }
  getPosts():Observable<any>
  {
     return this.http.get(this.baseUrl+"rest/AllPost");    
  }
  getPostByType(postType):Observable<any>
  {
     return this.http.get(this.baseUrl+"rest/getPost/"+postType);    
  }
};
