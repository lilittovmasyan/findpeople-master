// import { Injectable } from '@angular/core';
// import {User} from './app.component';
// import { Http } from '@angular/http';
// @Injectable()
// export class UserService {
//   checkins: User[];
//   getUsers(): User[] {
//     return MyUsers;
//   }
//   constructor(private http: Http) {
//     this.loadCheckins();
//   }
//   loadCheckins() {
//     this.http.get('/api/users')
//       .map(res => res.json())
//       .subscribe(
//         checkinData => this.checkins = checkinData
//       );
//   }
//
// }
//  const MyUsers: User[] = [
//     { name: 'Lucy',  distance:0.4, time:2 },
//     { name: 'Harry ',  distance:0.5, time:5 },
//     { name: 'Jack',  distance:0.6, time:1  },
//     { name: 'John',  distance:0.2, time:7  },
//     { name: 'Mary',  distance:0.1, time:3 },
//      ];
//
//
import { Injectable } from '@angular/core';
import {User} from './app.component';

@Injectable()
export class UserService {
  getUsers(): User[] {
    return this.MyUsers;
  }

  MyUsers: User[] = [
    { name: 'Lilit',  distance:0.4, time:2 },
    { name: 'Anush',  distance:0.5, time:5 },
    { name: 'Suro',  distance:0.6, time:1 },
    { name: 'Karo',  distance:0.2, time:7 },
    { name: 'Olga',  distance:0.1, time:3  },
    { name: 'Alis',  distance:0.7, time:2  },
  ];
}



