
import { Injectable } from '@angular/core';
import { Http, Response,URLSearchParams, Headers,RequestOptions  } from "@angular/http";
import { Observable } from "rxjs/Observable"
import { Router , NavigationExtras} from "@angular/router";
import { HeaderData} from '../../models/common/headerdata';
import { ErrorData } from "../../models/common/errordata";


import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


@Injectable()
export class RequestWrapperService {

    private static SESSION_AUTH_HEADER : string=undefined;

constructor( private _http:Http, private _router : Router ){}

     get(url:string, params?:URLSearchParams, headers?:any){
            return this._http.get(url,  { search: params } )
                      .map( resp =>{
                            if( resp.headers.get('Content-Type')=='text/html;charset=ISO-8859-1'){
                                window.location.href = "/inc/login.jsp";
                                return Observable.empty(); 
                           }

         
                            let body = resp.json();
                               
                                return body;
                          
                      })
                      .catch((error: Response) =>{

                        if( error.status >= 400 && error.status < 600){
                            let headerData : HeaderData = new HeaderData();
                             this._router.navigate(['/technicalError']);
                         }
                            return Observable.empty();                
          })


     }

      post(url:string, params?:any, headers?:any){
       let options = new RequestOptions();
       if(!headers ){
        options.headers = new Headers();
        if( RequestWrapperService.SESSION_AUTH_HEADER )
            options.headers.append('x-auth',  RequestWrapperService.SESSION_AUTH_HEADER);
        options.headers.append('Content-Type', 'application/json');
       }else{
        options.headers = headers;
       }

            return this._http.post(url,JSON.stringify(params), options )
                      .map( resp =>{
                            if( resp.headers.get('Content-Type')=='text/html;charset=ISO-8859-1'){
                                 window.location.href = "/inc/login.jsp"; //Parametrizar con una página de error
                                 return Observable.empty(); 
                            }

                            if( resp.headers.get('x-auth'))
                                     RequestWrapperService.SESSION_AUTH_HEADER = resp.headers.get('x-auth');
         
                            let body = resp.json();
                             
                            return body;
                           
                      })
                      .catch((error: Response) =>{
                        
                       if( this.isJson(error) ){ //Error lógico que tiene que llegar al objeto que inició la petición.
                        return Observable.throw( error.json() );
                       }

                       return Observable.throw( "Lamentamos comunicarle que no se ha podido realizar su petición. Inténtelo pasados unos minutos." );     
          })


     }


 private isJson(value: Response): boolean {
        return /\bapplication\/json\b/.test(value.headers.get('Content-Type'));
    }

}