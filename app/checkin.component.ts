import {Component, Input} from '@angular/core'
import {Http} from '@angular/http'

import {NgbModal, NgbActiveModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {BoxComponent} from './box.component'

@Component({
  selector: 'checkinbutton',
  template: `
  <template ngbModalContainer #content>
    <div class="modal-header">
      <h4 class="modal-title">Please enter your name</h4>
      <button type="button" class="close" aria-label="Close" (click)="close()">
      <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <input type="text" placeholder="enter your name"/>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Check in')">Check in</button>
      <button type="button" class="btn btn-secondary" (click)="close()">Close</button>
    </div>
  </template>
  <button  id="singlebutton" name="singlebutton" class="btn btn-primary center-block" (click)="buttonclick(content)" style="margin-top: 15px;" >Check in</button>
`,
  })
export class CheckInButtonComponent {
  x: string

  close(): void {
    let modal = <HTMLElement>document.getElementsByClassName("modal-content")[0];
    modal.style.display = "none";
  }

  constructor(private modalService: NgbModal) {
  }

  buttonclick(content: any) {
    this.modalService.open(content);
  }
}
