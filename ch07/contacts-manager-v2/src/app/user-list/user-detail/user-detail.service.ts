import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user.model';
import { MyApiGatewayService } from '../../my-api-gateway.service';

@Injectable()
export class UserDetailService {
  headerInfo: Headers
  constructor(public apiGateway: MyApiGatewayService) { }

  findUser(no: number) {
    return this.apiGateway.get(`users/${no}`).map(res => res.json());
  }

  addUser(user: any) {
    return this.apiGateway.post('users', user).map(res => res.json());
  }

  modifyUser(user: User) {
    return this.apiGateway.put(`users/${user.no}`, user).map(res => res.json());
  }

  removeUser(userNo: any) {
    return this.apiGateway.delete(`users/${userNo}`);
  }
}
