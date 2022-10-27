import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg ;
  constructor(private _authService: AuthService, private _router : Router) { }

  ngOnInit() {
  }

  login(username, pass){
    let out = this._authService.checkusernamepassword(username, pass);
    if (out == true){
      this._router.navigate(['/product'])
      return true;
      
    }
    else{
      this.msg = "Invalid Password"
      return false;
      
    }
  }

}
