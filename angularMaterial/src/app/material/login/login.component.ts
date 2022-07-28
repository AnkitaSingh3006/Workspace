import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   
  loginUserData = {
    email :"",
    password : ""
  }

  constructor(private auth:AuthService, private router:Router) { console.log("login loaded") }

  loginUser() {
    console.warn(this.loginUserData)
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log("Enter valid data");
        }

      )
    this.router.navigate(['/material/user']);
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  hide = true;

  ngOnInit(): void {
  }

}
