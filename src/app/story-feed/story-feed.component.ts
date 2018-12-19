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
selectedPost: Post;
constructor(private postService: PostService) {}

// tslint:disable-next-line:no-shadowed-variable
submitPost(description: string, feeling: string, count: number) {
  const newPost: Post = new Post(description, feeling, count);
  this.postService.addPost(newPost);
  }

  editPost(clickPost) {
    this.selectedPost = clickPost;
  }

  finishedEditing() {
    this.selectedPost = null;
  }
}



