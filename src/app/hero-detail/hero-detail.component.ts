import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { Superpower }         from '../superpower';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  superpowers: Superpower[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  addSuperpower(heroId: number, superpowerName: string){
    superpowerName = superpowerName.trim();
    if (!superpowerName) { return; }

    var superpowerObj = new Superpower;
    superpowerObj.name = superpowerName;

    this.heroService.addSuperpower(heroId, superpowerObj)
      .subscribe(superpower => {
        if (!this.hero.superpowers){
          this.hero.superpowers = [];
        }
        this.hero.superpowers.push(superpowerObj);
      });
    }

    removeSuperpower(superpower: Superpower){
      this.hero.superpowers = this.hero.superpowers.filter(s => s !== superpower);
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
}
