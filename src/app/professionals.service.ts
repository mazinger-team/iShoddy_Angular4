import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { environment } from './../environments/environment';
import { Professional } from './professional';

@Injectable()
export class ProfessionalsService {

  constructor(private _http: Http) { }

  getProfessionals(category: string): Observable<Professional[]> {

    return this._http
        .get(environment.url + "professionals" + (category ? "/?category="+category : ""))
        .map((data: Response) => {
          return data.json();
        })
        .map((json: any) => {
          return Professional.fromJsonToList(json.listProfessionalsOutputType.professionals);
        });
  }

  getProfessional(id: string): Observable<Professional> {
    return this._http
        .get(environment.url + "professionals/?id=" +id)
        .map((data: Response) => {
          return data.json();
        })
        .map((json : any) => {
          return Professional.fromJson(json.getProfessionalDetailOutputType.professional);
        });
  }
}
