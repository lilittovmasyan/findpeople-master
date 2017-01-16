import { Component } from '@angular/core';

export class User {
  name: string;
  distance:string;
  time:string;
}

@Component({
  selector: 'my-app',
  templateUrl:  'app/app.component.html',
})
export class AppComponent  {  }
