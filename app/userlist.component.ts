import { Component } from '@angular/core';

import { User } from './app.component';
import { UserService } from './user.service';



@Component({
  selector: 'userlist',
  providers: [UserService],
  templateUrl: `app/usertable.html`,
})
export class UserListComponent  {

    users: User[];
    setUsers(): void {
      this.users = this.userService.getUsers();
    }
    constructor(private userService: UserService) {
      this.setUsers();
    }
}
