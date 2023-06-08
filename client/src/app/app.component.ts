import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from './account/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  products: any[] = [];
  router: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private accountService: AccountService) {
    this.router = route;
    console.log(route)
  }
  ngOnInit(): void {
    this.http.get('https://localhost:6001/api/marks').subscribe({
      next: response => console.log(response),
      error: error => console.error(error),
      complete: () => {
        console.log('request completed');
        console.log('extra statments');
      }

    })

    this.loadCurrentUser();
  }


  loadCurrentUser() {
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe();
  }
}
