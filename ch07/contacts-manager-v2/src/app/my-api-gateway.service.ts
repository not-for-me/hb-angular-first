import { Injectable, Inject } from '@angular/core';
import { Http, Request, RequestOptionsArgs, Response, ResponseContentType, BaseRequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL_TOKEN, API_VER_TOKEN } from './app.tokens';

const JSON_MAPPER_FN = res => res.json();

const errorHandler = (res) => {
  return null;
};

@Injectable()
export class MyApiGatewayService {
  reqOptions: RequestOptionsArgs = {};

  constructor(private _http: Http,
    @Inject(API_VER_TOKEN) public apiVer: string,
    @Inject(API_URL_TOKEN) public apiUrl: string
  ) {
    this.makeDefaultHttpOption();
  }

  makeDefaultHttpOption() {
    const headers = new Headers();
    headers.set('X-My-Api-Token', 'angular-is-awesome');
    this.reqOptions.headers = headers;
  }

  get(url: string) {
    return this._http
      .get(`${this.apiUrl}/${this.apiVer}/${url}`, this.reqOptions)
      .map(JSON_MAPPER_FN)
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
