import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  public show:boolean = false;
// public buttonName:any = 'Show';

    ngOnInit () {  }

    toggle() {
      this.show = !this.show;

      // CHANGE THE NAME OF THE BUTTON.
      // if(this.show)
      //   this.buttonName = "Hide";
      // else
      //   this.buttonName = "Show";
    }
}
