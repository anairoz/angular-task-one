import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";

import { SignInComponent} from './sign-in/sign-in.component';
import { LogInComponent} from './log-in/log-in.component';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

    public open:boolean = false;

    ngOnInit () {  }

    toggle() {
      this.open = !this.open;
  }
  openSignInDialog() {
      console.log('signin')
      const dialogRef = this.dialog.open(SignInComponent, {
          width: '350px',
          data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
      });

  }
  openLogInDialog() {
      console.log('lol1')
      const dialogRef = this.dialog.open(LogInComponent, {
          width: '350px',
          data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
      });

  }
}
