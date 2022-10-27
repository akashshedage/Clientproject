import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkusernamepassword(uname:string,pwd:string)
  {
    if (uname=="admin" && pwd =="admin123") {
     
    
      sessionStorage.setItem('user','adm');
      return true;
    }
    else
    {
      return false;
    }
  }

 
}
