import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: ['./story-feed.component.css'],
  providers: [PostService]
})
export class StoryFeedComponent {

constructor(private postService: PostService) {}

submitPost(description: string) {
  const newPost: Post = new Post(description);
  this.postService.addPost(newPost);
  }
}
// currentTime = new Date();
// month: number = this.currentTime.getMonth() + 1;
// day: number = this.currentTime.getDate();
// year: number = this.currentTime.getFullYear();


