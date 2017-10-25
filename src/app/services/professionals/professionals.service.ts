import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { environment } from './../../../environments/environment';
import { Professional } from './../../professional';

@Injectable()
export class ProfessionalsService {

  private static PROFESSIONAL_ENDPOINT ="/api/v1/professionals/";
  private static PROFESSIONAL_BY_CATEGORY_LIST_ENDPOINT = ProfessionalsService.PROFESSIONAL_ENDPOINT + "?category=";
  private static PROFESSIONAL_BY_ID_LIST_ENDPOINT = ProfessionalsService.PROFESSIONAL_ENDPOINT + "?id=";
  
  constructor(private _http: Http) { }

  getProfessionals(category: string): Observable<Professional[]> {

    return this._http
        .get(environment.base_url + ProfessionalsService.PROFESSIONAL_BY_CATEGORY_LIST_ENDPOINT + category)
        .map((data: Response) => {
          return data.json();
        })
        .map((json: any) => {
          return Professional.fromJsonToList(json.listProfessionalsOutputType.professionals);
        });
  }

  getProfessional(id: string): Observable<Professional> {
    return this._http
        .get(environment.base_url + ProfessionalsService.PROFESSIONAL_BY_ID_LIST_ENDPOINT + id)
        .map((data: Response) => {
          return data.json();
        })
        .map((json : any) => {
          return Professional.fromJson(json.getProfessionalDetailOutputType.professional);
        });
  }
}
