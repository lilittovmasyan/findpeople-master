// import { Injectable } from '@angular/core';
// import {User} from './app.component';
//
// import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
//
// @Injectable()
// export class UserService {
//   constructor(private http: Http) {
//  }
//
//   getUsers(): Promise<User[]> {
//    return this.http.get('http://localhost:4003/api/users')
//        .toPromise()
//        .then(response => response.json() as User[])
//       .catch(this.handleError);
//   }
// private handleError(error: any): Promise<any> {
//      console.error('An error occurred', error); // for demo purposes only
//      return Promise.reject(error.message || error);
// }
//
//   // MyUsers: User[] = [
//   //   { name: 'Lilit',  distance:0.4, time:2 },
//   //   { name: 'Olga',  distance:0.1, time:3  },
//   // ];
// }

import { Injectable } from '@angular/core';
import {User} from './app.component';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  myUsers: User[] = [


  ];
//
  constructor(private http: Http) {
  }

  getUsers(): Promise<User[]> {
    return this.http.get('http://localhost:4003/api/users')
      .toPromise()
      .then(response => response.json().data)

  }


}



