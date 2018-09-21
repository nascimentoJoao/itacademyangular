import { Component, OnInit } from '@angular/core';
import { Hero } from '../../objects/hero';
import { Loona } from '../../objects/loona';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: '../html/dashboard.component.html',
  styleUrls: ['../css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  members: Loona[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getLoonaMembers();
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes.slice(0, 4)
    );
  }

  getLoonaMembers(){
    this.heroService.getLoonaMembersTwo().subscribe(
      members => this.members = members
    );
  }


}
