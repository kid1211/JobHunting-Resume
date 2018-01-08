import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css'],
})
export class ModalComponentComponent {
  @Input() data;
  @Input() index0;
  @Input() index1;
  @Input() index2;

  constructor(private heroService: HeroService, public activeModal: NgbActiveModal) { }
  ngOnInit() {
  }

  store() {
    // this.modalService.open(content, { windowClass: 'dark-modal' });
    // console.log(this.data);

    this.heroService.setData(this.data, this.index0, this.index1, this.index2);//check hero.service to for the data
    this.activeModal.close('save and quit');
  }
}
