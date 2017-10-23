import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable()
export class AuthService  {

  constructor() {}

  
  isLoggedIn():boolean{

   let key = sessionStorage.getItem("AccessIshoddy"); 

    if( key === 'granted')
      return true;
    else
      return false;
  }


}