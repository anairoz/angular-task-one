import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

    // testimonials = [
    //     {
    //         id: 1,
    //         userPhoto:'../assets/img/testimonals/up/john.png',
    //         feedback: 'I have been incredibly impressed with LinkUp team of developers. They worked hard to deliver the highest-quality product possible and exceeded my expectations at every step of the way. I initially found Andriy in search of a better price than what I could find locally with other development firms. But what I found - in addition to a better price - was a much higher-quality product as well, in every way: service, design, development, communications...etc. 5+++ Stars work. Great job.',
    //         author: 'John Kahman',
    //         career: 'Wholesum Founder'
    //
    //     },
    //     {
    //         id: 2,
    //         userPhoto:'../assets/img/testimonals/up/oleh.png',
    //         feedback: 'Nice company willing to work and get educated at he same time. Ready to face any challenges and very friendly with customers. They quote very humbly and every invoice can be discussed well in advance. We made a custom design web shop with them and keep on cooperating on development and maintenance. Highly recommended.',
    //         author: 'Oleh Zavadsky',
    //         career: 'CEO Ljus Sp. z o.o.'
    //     },
    //     {
    //         id: 3,
    //         userPhoto:'../assets/img/testimonals/up/adam.png',
    //         feedback: 'Loved working with LinkUp. Great guys, developers, and management. They knew how to do the job, in the most professional way.',
    //         author: 'Adam Frank',
    //         career: 'CTO ScaleAbout'
    //     }
    // ]
  constructor() { }

  ngOnInit() {
  }

}
