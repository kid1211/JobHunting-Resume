import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText: String;
  requirements;
  constructor(private http: Http) {
  }

  search() {
    // call http
    alert("http call to " + this.searchText);
    this.requirements = [
      "1 - 3 years of professional experience using Ruby on Rails",
      "1 - 3 years of professional experience using ES6 or TypeScript",
      "Experience using JavaScript frameworks (we use React) (nice to have: Redux / Webpack)",
      "Up-to-date knowledge of HTML5 / CSS",
      "Relational Database experience, PostgreSQL, etc.",
      "Distributed Version Control - Git / Github",
      "Experience working with and developing RESTful APIs",
      "Excellent communication skills and comfortable with partial remote work",
      "Experience with modern web and application development practices: continuous integration, scrum or agile development, don’t repeat yourself (DRY) frameworks, automated deployment and provisioning",
      "S. degree in Computer Science or a related field, or equivalent experience",
      "Experience and knowledge with some of these additional technologies: ansible, docker, ubuntu, nginx, redis, GraphQL",
      "Test-Driven Development, using technologies such as RSpec and Capybara",
      "AWS experience",
      "Any open source code or example projects that you're proud of",
    ]
  }



  ngOnInit(): void {
  }
}
