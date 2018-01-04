import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import 'rxjs/Rx';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText: String;
  requirements;
  constructor(private heroService: HeroService, ) {
  }

  search() {
    // call http
    alert("http call to " + this.searchText);
    // this.requirements = 
    this.heroService.isSearched(true);
    this.getRequirements();
  }



  ngOnInit(): void {
    if (this.heroService.isSearched(null)) this.getRequirements();
  }

  getRequirements(): void {
    this.heroService.getRequirements()
      .subscribe(temp => this.requirements = temp.content);
  }
}
