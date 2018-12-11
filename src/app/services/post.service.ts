import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
  }
  
  addAlbum(newPerson: Person) {
    this.persons.push(newPerson);
  }

  updateAlbum(localUpdatedAlbum) {
    var albumEntryInFirebase = this.getPersonbyId(localUpdatedAlbum.$key);
    albumEntryInFirebase.update({
      title: localUpdatedAlbum.title,
      artist: localUpdatedAlbum.artist,
      description: localUpdatedAlbum.description
    });
  }
  deleteAlbum(localAlbumToDelete) {
    var albumEntryInFirebase = this.getPersonbyId(localAlbumToDelete.$key);
    albumEntryInFirebase.remove();
  }
}