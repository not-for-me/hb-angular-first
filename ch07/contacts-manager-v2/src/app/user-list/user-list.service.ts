import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user-detail';


@Injectable()
export class UserListService {

  constructor(public http: Http) { }

  findAllUserSummary() {
    const headerInfo = new Headers();
    headerInfo.set('X-My-Api-Token', 'angular-is-awesome');

    return this.http.get('/api/v1/users', { headers: headerInfo }).map(res => res.json());
  }

}
