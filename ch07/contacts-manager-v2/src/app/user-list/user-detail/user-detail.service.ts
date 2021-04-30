import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { map } from 'rxjs/operators'
import { MyApiGatewayService } from '../../my-api-gateway.service';

@Injectable()
export class UserDetailService {
  headerInfo: HttpHeaders
  constructor(public apiGateway: MyApiGatewayService) { }

  findUser(no: number) {
    return this.apiGateway.get<User>(`users/${no}`);
  }

  addUser(user: any) {
    return this.apiGateway.post('users', user);
  }

  modifyUser(user: User) {
    return this.apiGateway.put(`users/${user.no}`, user);
  }

  removeUser(userNo: any) {
    return this.apiGateway.delete(`users/${userNo}`);
  }
}
