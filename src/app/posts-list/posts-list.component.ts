import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../models/posts.model";
import { PostService } from "../services/posts.service";

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss', './posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {

    posts: Post[] = [];

    postServiceSubscription: Subscription = new Subscription();

    constructor(private _postsService: PostService) {}

    ngOnInit(): void {
        this._postsService.getPosts();
        this.postServiceSubscription = this._postsService.postsSubject.subscribe(posts => {
            console.log(posts);
            this.posts = posts;
        });
    }

    ngOnDestroy(): void {
        if (this.postServiceSubscription) this.postServiceSubscription.unsubscribe();
    }
}