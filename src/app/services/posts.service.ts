import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { APIPaths } from "../config/config";
import { Post } from "../models/posts.model";

@Injectable({providedIn: 'root'})
export class PostService {
    private posts: Post[] = [];

    postsSubject = new Subject<Post[]>();

    constructor(private httpClient: HttpClient) {}


    getPosts(){
        const url =  environment.apiBaseURL + '/' + APIPaths.posts;
        this.httpClient.get<{message: string; posts: Post[]}>(url).subscribe(res => {
            this.posts = res.posts;
            this.postsSubject.next(JSON.parse(JSON.stringify(this.posts)));
        });
    }

    insertPost(title: string, content: string) {
        const url = environment.apiBaseURL + '/' + APIPaths.post;
        const newPost: Post = {
            id: '',
            title,
            content
        };
        this.httpClient.post<Post>(url, newPost).subscribe(post => {
            console.log(post);
            this.posts.push(post);
            this.postsSubject.next(JSON.parse(JSON.stringify(this.posts)));
        });
    }
}