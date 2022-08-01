import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private auth: AuthService, private route: Router, private _snackBar: MatSnackBar) { console.log("login loaded") }

  login = new FormGroup({
    "email": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  responsedata: any;

  loginUser() {
    if (this.login.valid) {
      console.warn(this.login);
      this.auth.loginUser(this.login.value).subscribe(result => {
        if (result != null) {
          this.responsedata = result;
          console.log('token', this.responsedata.token)
          this.route.navigate(['/material/user']).then (()=>{
            this._snackBar.open("Login Success" ,"OK",{
              duration: 5000,
            })
          });
        }
      }, (error) => {
        console.log('error', error, error.error);
        this._snackBar.open("Email or Password is wrong","OK",{
          duration:5000,
        })
      })
    }
  }



  hide = true;

  ngOnInit(): void {
  }

}
