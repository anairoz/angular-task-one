import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogConfig} from "@angular/material";
import {FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl,NgForm,FormGroupDirective} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
    minLen=6;
    hide = true;

  constructor() { }

  ngOnInit() {
  }
  usernameFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(this.minLen),
      ]);
  passFormControl = new FormControl('', [
          Validators.required,
          Validators.minLength(this.minLen),

      ]);

}
