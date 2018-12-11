import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
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
  addPerson(newPerson: Person) {
    this.persons.push(newPerson);
  }

  getPersonbyId(personId: string) {
    return this.database.object('persons/' + personId);
  }
  
  updatePerson(localUpdatedPerson) {
    var personEntryInFirebase = this.getPersonbyId(localUpdatedPerson.$key);
    personEntryInFirebase.update({
      name: localUpdatedPerson.name,
      location: localUpdatedPerson.location,
      description: localUpdatedPerson.description,
      career: localUpdatedPerson.career,
      biography: localUpdatedPerson.biography
    });
  }
  deletePerson(localPersonToDelete) {
    var personEntryInFirebase = this.getPersonbyId(localPersonToDelete.$key);
    personEntryInFirebase.remove();
  }
}