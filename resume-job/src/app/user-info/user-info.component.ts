import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { User } from '../base';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponentComponent } from '../modal-component/modal-component.component';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private heroService: HeroService, private modalService: NgbModal) { }
  user: User;
  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.heroService.getUser()
      .subscribe(user => this.user = user);
  }
  open(index1, index2) {
    const modalRef = this.modalService.open(ModalComponentComponent);

    modalRef.componentInstance.index0 = 0;
    modalRef.componentInstance.index1 = index1;//6 menas user database
    modalRef.componentInstance.index2 = null;

    switch (index1) {
      case 0:
        modalRef.componentInstance.data = this.user.name;
        break;
      case 1:
        modalRef.componentInstance.index2 = [index2];
        modalRef.componentInstance.data = this.user.content[index2];
        break;
      case 2:
        modalRef.componentInstance.data = this.user.summary;
        break;
      default:
        console.log("Modal is wrong");
        break;
    }
  }
}
