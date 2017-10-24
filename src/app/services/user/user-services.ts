import { Injectable } from '@angular/core';
import {  Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { environment } from '../../../environments/environment';
import { LoginResponseType } from '../../models/user/login-response-type';
import { LoginRequestType } from '../../models/user/login-request-type';
import { UserResponseType } from '../../models/user/user-response-type';
import { UserRequestType } from '../../models/user/user-request-type';
import { RequestWrapperService } from '../common/request-wrapper.services';


@Injectable()
export class UserService {
  private static USER_REGISTRY_ENDPOINT ="/api/v1/user/";
  private static USER_LOGIN_ENDPOINT ="/api/v1/user/login";
  constructor(private requestWrapperService: RequestWrapperService) { }

  newRegistry(user:UserRequestType): Observable<UserResponseType> {

    return this.requestWrapperService.post(environment.base_url + UserService.USER_REGISTRY_ENDPOINT,user, undefined)
                    .map((data) => {
                      return UserResponseType.fromJson( data  );
           });
  }

  loggIn(credentials:LoginRequestType): Observable<LoginResponseType> {
    return this.requestWrapperService.post(environment.base_url + UserService.USER_LOGIN_ENDPOINT,credentials, undefined)
                        .map((data) => {
                          return LoginResponseType.fromJson( data  );
           });
      }


}
