import { Component, OnInit } from '@angular/core';
import { Hero } from '../../objects/hero';
import { Loona } from '../../objects/loona';
import { HeroService } from "../../services/hero.service";

/* Não deixar mocks ou arquivos soltos na raíz do projeto.
*   Precisei criar diretorios para armazenar os mocks.
* */

@Component({
  selector: 'app-heroes',
  templateUrl: '../html/heroes.component.html',
  styleUrls: ['../css/heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /*
  * Aqui defino algumas propriedades que recebem minhas constantes
  * criadas pelos mocks, apenas para testar as funcionalidades do Angular.
  * Cada mock está numa pasta chamada mock, para melhor organização.
  * E para criar cada mock, preciso importar para cada mock um respectivo objeto
  * vindo também de um outro diretório chamado objects.
  *
  * Então:
  *
  * Objects -> Mocks -> Heroes.Component -> HTML.
  *
  * Sintaxe:
  *   heroes: Hero[]; -> a propriedade heroes é um array de Hero
  *   heroes = HEROES; -> a propriedade heroes recebe algo chamado HEROES
  *   Neste exemplo é um array estático de herois.
  *
  * */
  heroes: Hero[];
  loona_members: Loona[];

  selectedHero: Hero;
  selectedLoonaMember: Loona;


  /* Método para selecionar um heroi, sem nenhum retorno.
  *   Definido uma propriedade heroiSelecionado do tipo Heroi
  *   que é "construido" assim que o item for clicado no HTML.
  *
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
    Edit 1.1: Método não utilizado, pois ao clicar no heroi
    ele é direcionado ao component Details.
  */

  onSelectMember(member: Loona):void{
    this.selectedLoonaMember = member;
  }

  /**new_hero: Hero = {
    id: 1,
    name: 'Mariah Carey skinny legend'
  };**/


  /**hero = 'Windstorm';
  arianaGrande = 'Super Ariana, being the Goddess';
  demiLovato = 'Ms. Demi Lovato, being the heroine we need';**/

  constructor(private heroService: HeroService) {
  }

  getHeroes(): void{
    /*
      Método sem Observable
    this.heroes = this.heroService.getHeroes();
    */

    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

  }

  getLoonaMembers(): void{
    //this.loona_members = this.heroService.getLoonaMembers();
    this.heroService.getLoonaMembersTwo()
      .subscribe(members=> this.loona_members = members);
  }

/* Tip: SEMPRE usar o THIS quando chamar propriedades ou métodos. */
  ngOnInit() {
    this.getHeroes();
    this.getLoonaMembers();
  }

}
