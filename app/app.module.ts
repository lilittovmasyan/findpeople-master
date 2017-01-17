import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import {CheckInButtonComponent} from  './checkin.component';
import {UserListComponent} from './userlist.component';


@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule, HttpModule ],
  declarations: [ AppComponent, HeaderComponent ,CheckInButtonComponent,UserListComponent],
  bootstrap:    [ AppComponent ]
})



export class AppModule { }
