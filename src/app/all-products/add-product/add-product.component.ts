import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogConfig} from "@angular/material";
import {FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    categories = ['Category 1', 'Category 2', 'Category 3'];
    form: FormGroup;
    description:string;


    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<AddProductComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.description = data.description;
    }

    ngOnInit() {
           this.form = this.fb.group({
               description: [this.description, []]
           });
       }

       save() {
           this.dialogRef.close(this.form.value);
       }

       close() {
           this.dialogRef.close();
       }
}
