import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: ['./story-feed.component.css']
})
export class StoryFeedComponent {

currentTime = new Date();
month: number = this.currentTime.getMonth() + 1;
day: number = this.currentTime.getDate();
year: number = this.currentTime.getFullYear();

}
