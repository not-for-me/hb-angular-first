import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL_TOKEN, API_VER_TOKEN } from './app.tokens';

const errorHandler = (res) => {
  return null;
};

@Injectable()
export class MyApiGatewayService {
  reqOptions = {};

  constructor(private _http: HttpClient,
    @Inject(API_VER_TOKEN) public apiVer: string,
    @Inject(API_URL_TOKEN) public apiUrl: string
  ) {
    this.makeDefaultHttpOption();
  }

  makeDefaultHttpOption() {
    let headers = new HttpHeaders();
    headers = headers.set('X-My-Api-Token', 'angular-is-awesome');
    this.reqOptions = { headers: headers }
    debugger;
  }

  get<T>(url: string) {
    return this._http
      .get<T>(`${this.apiUrl}/${this.apiVer}/${url}`, this.reqOptions);
  }

  post(url: string, data: any) {
    return this._http
      .post(`${this.apiUrl}/${this.apiVer}/${url}`, data, this.reqOptions);
  }

  put(url: string, data: any) {
    return this._http
      .put(`${this.apiUrl}/${this.apiVer}/${url}`, data, this.reqOptions);
  }

  delete(url: string) {
    return this._http
      .delete(`${this.apiUrl}/${this.apiVer}/${url}`, this.reqOptions);
  }
}
