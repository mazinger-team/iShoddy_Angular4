import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { environment } from './../environments/environment';
import { Category } from './category';

@Injectable()
export class CategoriesService {

  constructor(private _http: Http) { }

  getCategories(): Observable<Category[]> {
    // let headers = new Headers();
    // headers.set("Access-Control-Allow-Origin", "*");

    // let options = new RequestOptions();
    // options.headers = headers;

    return this._http
        .get(environment.url)
        .map((data: Response) => {
          return data.json();
        })
        .map((json: any) => {
          return json.listCategoriesOutputType.categories as Category[];
        });
  }
}
