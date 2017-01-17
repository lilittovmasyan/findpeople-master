import { Component } from '@angular/core';

export class User {
  name: string;
  distance:number;
  time: string;
  location: {
    type: string,
    coordinates: Array<number>
  };
  date: string
}

@Component({
  selector: 'my-app',
  templateUrl:  'app/app.component.html',
})
export class AppComponent  {  }
