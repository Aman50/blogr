import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({providedIn: 'root'})
export class SnackbarService {
    constructor(private _snackbar: MatSnackBar) {

    }

    openSnackbar(message: string, action: string='Close') {
        this._snackbar.open(message, action);
    }
}