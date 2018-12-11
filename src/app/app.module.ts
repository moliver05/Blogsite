import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { StoryFeedComponent } from './story-feed/story-feed.component';
import { PhotolioComponent } from './photolio/photolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    StoryFeedComponent,
    PhotolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
