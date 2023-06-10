import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  users:any[]= [];
  type:string = "student";
  credendials:any={
    email:'',
    password:''
  }
  constructor(private fb:FormBuilder ,private service:AuthService  , private router:Router , private toaster:ToastrService) { }

  ngOnInit(): void {
    // this.getUsers();
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      type:[this.type],
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
    })
  }

  getRole(event:any) {
    this.type = event.value
    // this.getUsers()
  }
  getUserData() {
    this.credendials.email= this.loginForm.value.email ;
    this.credendials.password= this.loginForm.value.password
  }

  submit() {
    this.getUserData();
    console.log(this.credendials);
    this.service.login(this.credendials).subscribe({
        next:(res)=> {
          this.service.user.next(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('email', res.email);
          localStorage.setItem('userName', res.displayName)
          this.toaster.success("تم تسجيل الدخول بنجاح" , "success");
          this.router.navigate(['/subjects'])
        },
        error:(err)=> {
          this.toaster.error(err.message , "Error" );
          console.log(err.message);
        }
  })
    

  }

}

