import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  products : any[] = [];
  router:any;
  constructor(private http:HttpClient,private route: ActivatedRoute){
    this.router = route;
    console.log(route)
  }
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products').subscribe({
      next: response => console.log(response),
      error: error => console.error(error),
      complete: ()=>{
        console.log('request completed');
        console.log('extra statments');
      }
      
    })
  }
}
