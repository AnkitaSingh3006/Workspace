import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  


  constructor(private auth:AuthService, private route:Router) { console.log("login loaded") }
 
  login = new FormGroup({
    "email": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

responsedata:any;

  loginUser() {
    if (this.login.valid) {
      console.warn(this.login);
      this.auth.loginUser(this.login.value).subscribe(result => {
        if (result != null) {
          this.responsedata = result;
          console.log('token', this.responsedata.token)
          this.route.navigate(['/material/user']);
        } 
        else{
          console.log('error')
        }
      })
  }
}
  
  hide = true;

  ngOnInit(): void {
  }

}
