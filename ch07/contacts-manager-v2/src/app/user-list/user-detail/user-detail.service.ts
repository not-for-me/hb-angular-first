import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user.model';

@Injectable()
export class UserDetailService {
  headerInfo: Headers
  constructor(public http: Http) {
    this.headerInfo = new Headers();
    this.headerInfo.set('X-My-Api-Token', 'angular-is-awesome');
  }

  findUser(no: number) {
    return this.http.get(`/api/v1/users/${no}`, { headers: this.headerInfo }).map(res => res.json());
  }

  addUser(user: any) {
    return this.http.post('/api/v1/users', user, { headers: this.headerInfo }).map(res => res.json());
  }

  modifyUser(user: User) {
    return this.http.put(`/api/v1/users/${user.no}`, user, { headers: this.headerInfo }).map(res => res.json());
  }

  removeUser(userNo: any) {
    return this.http.delete(`/api/v1/users/${userNo}`, { headers: this.headerInfo });
  }
}
