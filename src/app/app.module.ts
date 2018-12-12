import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api_keys';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { StoryFeedComponent } from './story-feed/story-feed.component';
import { PhotolioComponent } from './photolio/photolio.component';
import { CommentLikeComponent } from './comment-like/comment-like.component'; 


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
   
    ProfileComponent,
    StoryFeedComponent,
    PhotolioComponent,
    CommentLikeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
