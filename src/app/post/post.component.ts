import { EditPostComponent } from './../edit-post/edit-post.component';
import { Component, OnInit} from '@angular/core';
import { Post } from './../models/post.model';
import { PostService } from './../services/post.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]

})

export class PostComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  // selectedPost = null;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPost();
  }


  // editPost(clickPost) {
  //   this.selectedPost = clickPost;
  // }

  // finishedEditing() {
  //   this.selectedPost = null;
  // }
}

