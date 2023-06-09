import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  counters:number[]= [364,150,78,94];
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    margin:30,
    navSpeed: 700,
    responsive: {
      0:{
        items:1
      },
      640:{
          items:2
      },
      1200:{
          items:3
      }

    },

  }
  
}
