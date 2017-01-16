import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import {CheckInButtonComponent} from  './checkin.component';
import {UserListComponent} from './userlist.component';
import {BoxComponent} from './box.component';


@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule ],
  declarations: [ AppComponent, HeaderComponent ,CheckInButtonComponent,UserListComponent,BoxComponent],
  bootstrap:    [ AppComponent ]
})



export class AppModule { }
