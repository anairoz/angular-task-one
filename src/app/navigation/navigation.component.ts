import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

    public open:boolean = false;

    ngOnInit () {  }
    // $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
	// 	$(this).toggleClass('open');
	// })
    toggle() {
      this.open = !this.open;
  }
}
