import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user/user.model';

@Injectable()
export class InMemoryUserService implements InMemoryDbService {
  private _database: any;
  constructor() { }
  
  createDb() {
    this._database = {};
    this.makeUserTableAndDummyData();
    return this._database;
  }

  private createTable(tableName: string, initialData: any[]) {
    this._database[tableName] = initialData;
  }

  private makeUserTableAndDummyData() {
    const dummyUserData: User[] = [
      { id: 1, name: 'woojin', age: 33 },
      { id: 2, name: 'yunhye', age: 31 },
      { id: 3, name: 'sunhye', age: 29 },
    ];

    this.createTable('users', dummyUserData);
  }
}