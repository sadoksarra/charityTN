import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  Post:any = [];

  constructor(private apiService: ApiService) { 
    this.readPost();
  }

  ngOnInit() {}

  readPost(){
    this.apiService.getPosts().subscribe((data) => {
     this.Post = data;
    })    
  }

  removePost(post, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletePost(post._id).subscribe((data) => {
          this.Post.splice(index, 1);
        }
      )    
    }
  }

}
