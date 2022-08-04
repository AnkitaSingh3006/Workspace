import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 90;
  loading = false;


  constructor(private auth: AuthService, private route: Router, private _snackBar: MatSnackBar, private userInfo:FormBuilder) { console.log("login loaded") }

  login = this.userInfo.group({
    "email":['',[Validators.required,Validators.email]],
    "password": ['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z0-9]')])],
  });

  responsedata: any;

  loginUser() {
    if (this.login.valid) {
      this.loading = true ;
      console.log(this.login);
      this.auth.loginUser(this.login.value).subscribe(result => {
        if (result != null) {
          this.responsedata = result;
          console.log('token', this.responsedata.token)
          this._snackBar.open("Login Success" ,"OK",{
            duration: 5000,
          })
          this.route.navigate(['/material/user'])
          this.loading = false;
        }
      }, (error) => {
        console.log('error', error, error.error);
        this._snackBar.open("Email or Password is wrong","OK",{
          duration:5000,
        })
        this.loading = false;
      })
    }
  }



  hide = true;

  ngOnInit(): void {
  }

}
