import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClientProviderService } from './http-client.provider.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_token = environment.api_token;
  constructor(
    private http:HttpClientProviderService,
  ) {
  }
  

  setToken(token: any){
    this.api_token = token;
  }

  getToken(){
    return this.api_token;
  }

  getHeader(url: any, accept = null, contentType=null){
    var header:any = {};
    if(accept)
      header['Accept'] = accept;
    if(contentType)
      header['Content-Type']=contentType;
    if(!url.includes('auth'))
      header['Authorization']=`Bearer ${this.getToken()}`;
    return header;
  }

  getImage(url: any):Observable<any>{    
    return this.http.getImage(url);
  }

  getDataFromUrl(url: any):Observable<any>{    
    return this.http.get(url, {}, this.getHeader(url));
  }

  get(path:string, params:any = {}):Observable<any>{
    var url = `${environment.api_url}${path}`;
    
    return this.http.get(url, params, this.getHeader(url));
  }
  
  put(path: string, body: Object = {}): Observable<any> {
    var url = `${environment.api_url}${path}`;
    return this.http.put(url,body, this.getHeader(url));
  }
  post(path: string, body: Object = {}, content_type=null): Observable<any> {
    var url = `${environment.api_url}${path}`;
    return this.http.post(url,body, this.getHeader(url));
  }
   
  patch(path: string, body: Object = {}): Observable<any> {
    var url = `${environment.api_url}${path}`;
    return this.http.patch(url, body, this.getHeader(url));
  }

  delete(path: string, params:Object = {}): Observable<any> {
    var url = `${environment.api_url}${path}`;
    return this.http.delete(url, params, this.getHeader(url));
  }
  
}
