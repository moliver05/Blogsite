import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogsite';
  comments: Observable<any[]>;
  posts: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.posts = db.list('posts');
  }
}
