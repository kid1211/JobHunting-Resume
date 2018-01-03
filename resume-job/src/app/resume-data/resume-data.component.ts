import { Component, OnInit, Input } from '@angular/core';
import { LowData, HighData } from '../base';
import { ResumeType, HeroService } from '../hero.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrls: ['./resume-data.component.css']
})
export class ResumeDataComponent implements OnInit {

  @Input() rType: number;
  options: SortablejsOptions;

  constructor(private heroService: HeroService, private modalService: NgbModal) {
    this.options = {
      onUpdate: (event: any) => {
        // this.postChangesToServer();
        console.log(this);
      }
    };
  }

  ngOnInit() {

    // console.log("rType ", this.rType);
    switch (this.rType) {
      case 0:
        this.getSkills();
        break;
      case 1:
        this.getWorkHistory();
        break;
      case 2:
        this.getEducation();
        break;
      case 3:
        this.getProjects();
        break;
      case 4:
        this.getVolunteer();
        break;
      case 5:
        this.getOthers();
        break;
      default:
        break;
    }




  }

  lowData: LowData;
  highData: HighData;

  /** low Data */
  getSkills(): void {
    this.heroService.getSkills()
      .subscribe(temp => this.lowData = temp);
  }
  getVolunteer(): void {
    this.heroService.getVolunteer()
      .subscribe(temp => this.lowData = temp);
  }
  getOthers(): void {
    this.heroService.getOthers()
      .subscribe(temp => this.lowData = temp);
  }

  /** high Data */
  getWorkHistory(): void {
    this.heroService.getWorkHistory()
      .subscribe(temp => this.highData = temp);
  }
  getEducation(): void {
    this.heroService.getEducation()
      .subscribe(temp => this.highData = temp);
  }
  getProjects(): void {
    this.heroService.getProjects()
      .subscribe(temp => this.highData = temp);
  }

  /** 
   * For high data it is a little bit confusing
   * index1 is what type in the index1 in the hero service
   * index 2 is highDataContent index in index2
   * index3 is either descriptionindex or contentIndex
   */
  open(index1, index2, index3) {
    const modalRef = this.modalService.open(ModalComponentComponent);
    modalRef.componentInstance.index0 = this.rType;
    modalRef.componentInstance.index1 = index1;

    switch (this.rType) {
      case 0:
      case 4:
      case 5:
        // low data
        modalRef.componentInstance.index2 = [index2];
        modalRef.componentInstance.data = this.lowData.content[index2].content;
        // console.log(this.lowData.content[index2]);
        break;
      case 1:
      case 2:
      case 3:
        // high data
        switch (index1) {
          case 0:
            // where
            modalRef.componentInstance.data = this.highData.content[index2].where;
            modalRef.componentInstance.index2 = [index2, null, null];
            break;
          case 1:
            // when
            modalRef.componentInstance.data = this.highData.content[index2].when;

            modalRef.componentInstance.index2 = [index2, null, null];
            break;
          case 2:
            //title
            modalRef.componentInstance.data = this.highData.content[index2].title;
            modalRef.componentInstance.index2 = [index2, null, null];
            break;
          case 3:
            // description
            modalRef.componentInstance.data = this.highData.content[index2].description[index3];
            modalRef.componentInstance.index2 = [index2, index3, null];
            break;
          case 4:
            // content
            modalRef.componentInstance.data = this.highData.content[index2].content[index3].content;
            modalRef.componentInstance.index2 = [index2, null, index3];
            break;
          default:
            console.log('Modal is in error');
            break;
        }
        break;
      default:
        console.log("Data storage error, type.");
        break;
    }


    //     @Input() data;
    // @Input() index0;
    // @Input() index1;
    // @Input() index2;


  }
}
