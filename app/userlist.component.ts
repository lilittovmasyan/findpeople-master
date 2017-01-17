// import { Component,OnInit } from '@angular/core';
//
// import { User } from './app.component';
// // import { UserService } from './user.service';
//
// @Component({
//   selector: 'userlist',
//   // providers: [UserService],
//   templateUrl: `app/usertable.html`,
// })
// export class UserListComponent  {
//   constructor() {
// }
// ngOnInit(): void {
//     this.setUsers();
// }
//     users: User[];
//     setUsers(): void {
//      //this.userService.getUsers().then(users => {this.users = users; console.log(this.users)});
//     }
// }

import { Component } from '@angular/core';
import * as moment from 'moment'
import { User } from './app.component';
import { UserService } from './user.service';

import {LocationHandler, Location} from './mylocation'

@Component({
  selector: 'userlist',
  providers: [UserService,LocationHandler ],
  templateUrl: `app/usertable.html`,
})
export class UserListComponent  {
  Users: User[];
  private myLocation: Location;
  constructor(private userService: UserService, private locationHandler: LocationHandler) {
    this.locationHandler.getLocation()
      .then((location) => {
        this.myLocation = location;
      })
      .catch(() => {

      });
  }
  calcDistance(loc1: Array<number>,loc2: Array<number>) {

    const [lat1, lng1] = loc1;
    const [lat2, lng2] = loc2;

    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2-lat1);
    const dLng = deg2rad(lng2-lng1);
    const a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLng/2) * Math.sin(dLng/2)
      ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c; // Distance in km
    return d;

    function deg2rad(deg:any) {
      return deg * (Math.PI/180)
    }
  }
  setUsers():  void {
    this.userService.getUsers().then(users =>
    {console.log(users);
    for(let i = 0 ; i <= users.length; i++)
    {
      let newUser = new User();
      newUser.name = users[i].name;
      newUser.distance = this.calcDistance([this.myLocation.lat, this.myLocation.lng],users[i].location.coordinates);
      newUser.time = moment(users[i].date).format("hh:mm:ss");
      this.Users.push(newUser);
    }
    });

}

}
