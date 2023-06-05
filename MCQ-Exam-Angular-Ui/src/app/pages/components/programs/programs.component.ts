import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
  customOptions: OwlOptions = {
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
}
