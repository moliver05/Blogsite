import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogsite';
  // persons: Observable<any[]>;
  // comments: Observable<any[]>;
  // posts: Observable<any[]>;
  // constructor(db: AngularFireDatabase) {
  //   this.persons = db.list('persons');
  //   this.comments = db.list('comments');
  //   this.posts = db.list('posts');
  //   }
  }
