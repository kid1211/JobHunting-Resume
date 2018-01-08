import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume Tailor';
  constructor(private router: Router) { }

  getRoute() {
    if (this.router.url === '/export') {
      return "exportClass";
    }
  }

  items = [1, 2, 3, 4, 5];
}
