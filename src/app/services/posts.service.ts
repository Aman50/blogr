import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Post } from "../models/posts.model";

@Injectable({providedIn: 'root'})
export class PostService {
    private posts: Post[] = [];

    setGetPosts = new Subject<Post[]>();


    getPosts(): Post[] {
        return JSON.parse(JSON.stringify(this.posts));
    }

    insertPost(title: string, content: string) {
        this.posts.push({title, content});
        this.setGetPosts.next(this.getPosts());
    }
}