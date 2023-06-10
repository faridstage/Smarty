import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  user = new Subject()
 
  createUser(model:any) {
    return this.http.post(environment.baseApi+'students' , model)
  }


  login(model:any){
    return this.http.post<User>(environment.baseApi+'Account/login',model);
  }


  getUsers(type:string){
    return this.http.get(environment.baseApi+type)
  }

  getStudent(id:number) {
    return this.http.get(environment.baseApi+"students/"+id)
  }
  updateStudent(id:number , model:any) {
    return this.http.put(environment.baseApi+"students/"+id , model)
  }
  getRole() {
    let email= localStorage.getItem('email');
    if(email === '' )
    return 
  }


  
}
