import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { Component} from '@angular/core';

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: ['./story-feed.component.css'],
  providers: [PostService]
})
export class StoryFeedComponent {

constructor(private postService: PostService) {}

submitPost(description: string, feeling: string) {
  const newPost: Post = new Post(description, feeling );
  this.postService.addPost(newPost);
  }
}


