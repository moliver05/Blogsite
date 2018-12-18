import { Post } from './../models/post.model';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css'],
  providers: [PostService]
})
export class CommentDetailComponent implements OnInit {
  postId: string;
  postToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService
    ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });
    this.postToDisplay = this.postService.getPostbyId(this.postId);
  }

}
