import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogConfig} from "@angular/material";
import {FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl,NgForm,FormGroupDirective} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


    hide = true;
    minLen=6;

    constructor() { }

    ngOnInit() {
    }
    firstNameFormControl = new FormControl('', [
        Validators.required
        ]);
    secondNameFormControl = new FormControl('', [
        Validators.required,
        ]);
    usernameFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(this.minLen),
        ]);
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
        ]);
    passFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(this.minLen),
       ]);
    confirmFormControl = new FormControl('', [
       Validators.required,
       ]);

}
