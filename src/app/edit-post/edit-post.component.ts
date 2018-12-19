import { Post } from './../models/post.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from './../services/post.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [PostService]
})
export class EditPostComponent {
  @Input() selectedPost: Post;
  @Output() clickedDone = new EventEmitter();
  editing = false;

  constructor(private postservice: PostService) { }

  beginUpdatingPost(postToUpdate) {
    this.postservice.updatePost(postToUpdate);
  }
  beginDeletingPost(postToDelete) {
    if (confirm('Confirm')) {
      this.postservice.deletePost(postToDelete);
    }
  }
  startEdit() {
    this.editing = true;
  }

  finishedEditing( )  {
    this.clickedDone.emit(this.selectedPost);
    this.editing = false;
  }
}

