import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ PostService} from '../services/post.service';
import {Post} from '../classes/post';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 baseUrl:string;
  constructor(private postServices: PostService) {
    this.baseUrl=environment.baseUrl;    
   }
  postList=Post[10];  
  postSlider: Post[] = new Array(); 
  postCard: Post[] = new Array();  
 
  ngOnInit() {         
    this.postServices.getPosts().subscribe(
      data=>
      {
        this.postList=data.result;         
        for (let index = 0; index < data.result.length; index++) 
        {     
          var posttype=data.result[index].postType;            
          if(posttype==='Slider')
          {
            data.result[index].content=data.result[index].content.substring(0,600);
            this.postSlider.push(data.result[index]);            
          }else if(posttype==='Card')
          {
            alert(data.result[index].content);
            data.result[index].content=data.result[index].content.substring(0,100);

            this.postCard.push(data.result[index]); 
          }
        } 
      }
    ); 

  } 
 
}
