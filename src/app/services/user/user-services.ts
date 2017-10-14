import { Injectable } from '@angular/core';
import {  Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { environment } from '../../../environments/environment';
import { UserResponseType } from '../../models/user/user-response-type';
import { UserRequestType } from '../../models/user/user-request-type';
import { RequestWrapperService } from '../common/request-wrapper.services';


@Injectable()
export class UserService {
  private static endpoint ="/api/v1/user/user";
  constructor(private requestWrapperService: RequestWrapperService) { }

  newRegistry(user:UserRequestType): Observable<UserResponseType> {

    return this.requestWrapperService.post(environment.base_url + UserService.endpoint,user, undefined)
                    .map((data) => {
                      return UserResponseType.fromJson( data  );
                  });
  }
}
