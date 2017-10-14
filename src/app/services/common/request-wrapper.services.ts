
import { Injectable } from '@angular/core';
import { Http, Response,URLSearchParams, Headers  } from "@angular/http";
import { Observable } from "rxjs/Observable"
import { Router , NavigationExtras} from "@angular/router";
import { HeaderData} from '../../models/common/headerdata';
import { ErrorData } from "../../models/common/errordata";


import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


@Injectable()
export class RequestWrapperService {


constructor( private _http:Http, private _router : Router ){}

     get(url:string, params?:URLSearchParams, headers?:any){
            return this._http.get(url,  { search: params } )
                      .map( resp =>{
                            
                          /*  if( resp.status >= 400 && resp.status < 600){
                                let headerData : HeaderData = new HeaderData();
                                let errorData : ErrorData = new ErrorData(resp.statusText,"T","NETWORK")
                                
                                 throw new Error(resp.statusText);
                             }*/

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
                           // let errorData : ErrorData = new ErrorData("Error de servidor: " + error.status,"T","Error de servidor: " + error.status)
                             this._router.navigate(['/technicalError']);
                         }


                           /* if (this._enviorement.technicalError.errorType === "T"){
                                this._clientService.setUser( null );
                                this._router.navigate(['/technicalError']);
                            }else
                                return Observable.throw( this._enviorement.technicalError );*/

                            return Observable.empty();                
          })


     }

      post(url:string, params?:any, headers?:any){

            return this._http.post(url,JSON.stringify(params),{ headers: new Headers({ 'Content-Type': 'application/json' }) })
                      .map( resp =>{
                            console.error('David:' +resp.status);
                            if( resp.headers.get('Content-Type')=='text/html;charset=ISO-8859-1'){
                                 window.location.href = "/inc/login.jsp"; //Parametrizar con una página de error
                                 return Observable.empty(); 
                            }
         
                            let body = resp.json();
                             
                            return body;
                           
                      })
                      .catch((error: Response) =>{
                       if( this.isJson(error) ){ //Error lógico que tiene que llegar al objeto que inició la petición.
                        return Observable.throw( error.json() );
                       }

                           
          })


     }


 private isJson(value: Response): boolean {
        return /\bapplication\/json\b/.test(value.headers.get('Content-Type'));
    }

}