import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
  }
  
  addPost(newPost: Post) {
    this.posts.push(newPost);
  }

  getPostbyId(personId: string) {
    return this.database.object('persons/' + personId);
  }
  

  updatePost(localUpdatedPost) {
    var postEntryInFirebase = this.getPostbyId(localUpdatedPost.$key);
    postEntryInFirebase.update({
      name: localUpdatedPost.name,
      description: localUpdatedPost.description
    });
  }
  deleteAlbum(localAlbumToDelete) {
    var albumEntryInFirebase = this.getPostbyId(localAlbumToDelete.$key);
    albumEntryInFirebase.remove();
  }
}