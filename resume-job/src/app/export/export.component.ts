import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: '../resume-preview/resume-preview.component.html',
  styleUrls: ['./export.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ExportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // alert("Click the name to go back to resume");
  }

}
