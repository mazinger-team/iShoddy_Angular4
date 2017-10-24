import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from '../../services/user/user-services';
import { LoginRequestType } from '../../models/user/login-request-type';
import { LoginResponseType } from '../../models/user/login-response-type';

@Component({
    selector: 'login-dashboard',
    templateUrl: './login-dashboard.component.html',
    styleUrls: ['../../../assets/css/style.css','../../../assets/css/animate.css'] 
  })
export class LoginDashboardComponent{

    public username:string;
    public password:string;
    public showError:boolean;
    public showErrorUsername:boolean;
    public showErrorPassword:boolean;
    public showText:string;

  constructor(private _userService: UserService, private _router: Router){
    this.showError = false;
    this.showErrorUsername = false;
    this.showErrorPassword = false;

  }

  executeLogin(){
    this.showErrorUsername = false;
    this.showErrorPassword = false;
    this.showError = false;

    if(! this.username ){
      this.showErrorUsername = true;
      this.showText = "Campo obligatorios";
     
    }

    if(! this.password ){
      this.showErrorPassword = true;
      this.showText = '(*)' + "Faltan campos obligatorios";
     
    }

    if( this.showErrorUsername || this.showErrorPassword ){
      this.showError = true;
      return;
    }
    let credentials: LoginRequestType =  new LoginRequestType( this.username, this.password);
    
    this._userService.loggIn(credentials).subscribe(
          resp => {
            this.showError = false;
            this._router.navigate(['/dashboard']);
            sessionStorage.setItem("AccessIshoddy", "granted"); 
          },error =>{
            this.showError = true;
            this.showText ='(*)' + error;
            //sessionStorage.setItem("AccessIshoddy", "granted"); 
            //this._router.navigate(['/dashboard']);
    } );

  }

}