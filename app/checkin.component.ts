import { Component } from '@angular/core'
import {Http} from '@angular/http'


import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BoxComponent} from './box.component'

@Component({
  selector: 'checkinbutton',
  template: `
<button id="singlebutton" name="singlebutton" class="btn btn-primary center-block" (click)="buttonclick()" style="margin-top: 15px;" >Check in</button> 
`,
  //styles: ['.buttonstyle{background-color: red;}']
})
export class CheckInButtonComponent  {
  x:string
  constructor(private modalService: NgbModal) {
    this.x = localStorage.getItem('name')
  }
buttonclick()
{
  //this.modalService.open(BoxComponent);

  this.x = prompt("Enter your name", this.x)
  localStorage.setItem('name', this.x)
}
}
