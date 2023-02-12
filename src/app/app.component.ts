import { Component } from '@angular/core';
import { Post } from './models/posts.model';
import { PostService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PersonaBlog';

  posts: Array<Post> = [];

  constructor(private _postsService: PostService) {}

}
