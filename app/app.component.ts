import { Component } from '@angular/core';

export class User {
  name: string;
  distance:number;
  time:number;
}

@Component({
  selector: 'my-app',
  templateUrl:  'app/app.component.html',
})
export class AppComponent  {  }
