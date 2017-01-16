import { Injectable } from '@angular/core';
import {User} from './app.component';

@Injectable()
export class UserService {
  getUsers(): User[] {
    return this.MyUsers;
  }

  MyUsers: User[] = [
    { name: 'Lucy',  distance:'0.4km', time:'2 hours ago' },
    { name: 'Harry ',  distance:'0.5km', time:'5 hours ago' },
    { name: 'Jack',  distance:'0.6km', time:'1 hours ago' },
    { name: 'John',  distance:'0.2km', time:'7 hours ago' },
    { name: 'Mary',  distance:'0.1km', time:'3 hours ago' },
     ];
}
