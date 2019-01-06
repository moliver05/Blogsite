import { PostComponent } from './../post/post.component';
import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: ['./story-feed.component.css'],
  providers: [PostService]
})
export class StoryFeedComponent {
  @Output() clickPost = new EventEmitter();
  selectedPost = null;
constructor(private postService: PostService) {}

submitPost(description: string, feeling: string, count: number) {
  const newPost: Post = new Post(description, feeling, count);
  this.postService.addPost(newPost);
  }

  editPost(postToEdit) {
    this.clickPost.emit(postToEdit);
  }
}




