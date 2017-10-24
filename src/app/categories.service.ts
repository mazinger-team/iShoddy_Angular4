import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { environment } from './../environments/environment';
import { Category } from './category';

@Injectable()
export class CategoriesService {

  private static CATEGORY_LIST_ENDPOINT ="/api/v1/categories/";

  constructor(private _http: Http) { }

  getCategories(): Observable<Category[]> {
    // let headers = new Headers();
    // headers.set("Access-Control-Allow-Origin", "*");

    // let options = new RequestOptions();
    // options.headers = headers;


    
    return this._http
       // .get(environment.url+"categories/")
        .get(environment.base_url + CategoriesService.CATEGORY_LIST_ENDPOINT)
        .map((data: Response) => {
          return data.json();
        })
        .map((json: any) => {
          let collection = json.listCategoryOutputType.categories as Category[];
          collection.sort((c1,c2) => {
            return c2.subcategories.length - c1.subcategories.length;
          });
          return collection;
        });
  }
}
