import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    margin:30,
    navSpeed: 700,
    rtl:true,
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
  customOptions2: OwlOptions = {
    navSpeed: 700,
    loop:true,
    dots: true,
    margin:30,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
  }


  // constructor(@Inject(DOCUMENT) private document: Document, private window: Window){
    

  // }
}
