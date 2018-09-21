import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../objects/hero';
import { Location } from '@angular/common';

import { HeroService } from "../../services/hero.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: '../html/hero-detail.component.html',
  styleUrls: ['../css/hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }
  /* Buscando os dados do herói com base no ID da URL. */
  getHero(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(
      hero=> this.hero = hero
    );
  }

}
