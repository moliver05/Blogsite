import { Injectable } from '@angular/core';
import { Person } from './models/person.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PersonService {
  persons: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.persons = database.list('persons');

  }

  getPerson() {
    return this.persons;
  }
  addAlbum(newPerson: Person) {
    this.persons.push(newPerson);
  }

  getPersonbyId(albumId: string) {
    return this.database.object('albums/' + albumId);
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