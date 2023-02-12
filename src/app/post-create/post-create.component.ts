import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Post } from "../models/posts.model";
import { PostService } from "../services/posts.service";
import { SnackbarService } from "../snackbar.service";

@Component ({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.scss']
})
export class PostsCreateComponent implements OnInit {

    constructor(private _snackbarService: SnackbarService, private _postsService: PostService) {}
    ngOnInit(): void {
    }

    ngOnDestroy(): void {

    }
    
    onSubmitForm(form: NgForm) {
        if (form.invalid) {
            this._snackbarService.openSnackbar('Please correct the fields highlighted with red');
            return;
        }

        this._postsService.insertPost(form.value.title, form.value.content);
    }

    
}