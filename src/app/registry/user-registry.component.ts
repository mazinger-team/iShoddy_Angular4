import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

import { UserService} from '../services/user/user-services';
import { UserRequestType } from './../models/user/user-request-type';

@Component({
  selector: 'user-registry',
  templateUrl: './user-registry.component.html',
  styleUrls: ['./user-registry.component.scss']
})
export class RegistryUserComponent {

  public email:string;
  public password:string;
  public modelEmailValidation: boolean;
  public modelPasswordValidation: boolean;
  private user : UserRequestType;
  private registryManager: boolean;
  private registryError: boolean;
  private registryErrorText: string;
  

  constructor( private userService : UserService, private _router: Router) {
    this.registryManager = false;
    this.registryError = false;
  }

  clickRegisterUser(){

    if( !this.email )
       this.modelEmailValidation = true;
    else{
        this.modelEmailValidation = false;
    }


    if( this.modelEmailValidation || this.modelPasswordValidation  )
        return;

    //Creamos el objeto a enviar

    this.user = new UserRequestType(this.email, this.password);

    this.userService.newRegistry( this.user ).subscribe(
      resp => {
       if(resp._id )
            this.registryManager = true;
      }, error =>{
          this.registryError = false;
          this.registryErrorText =  error.headerData ? error.headerData.errorData.errorText : error;
      });
  }

  goBack() {
    this._router.navigate (['/publicarea', {outlets: {'public-area': ['']}}],  { skipLocationChange: true });
  }

}