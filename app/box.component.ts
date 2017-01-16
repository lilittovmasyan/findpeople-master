import { Component } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'box',
  templateUrl: `app/box.html`,
})
export class BoxComponent  {
  constructor(public activeModal: NgbActiveModal) {}
}
