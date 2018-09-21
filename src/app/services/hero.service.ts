import { Injectable } from '@angular/core';
import { Hero } from '../objects/hero';
import { HEROES } from '../mock/mock-heroes';
import { Loona } from '../objects/loona';
import { MEMBERS } from '../mock/mock-loona';
import { MessageService} from "./message.service";
import { Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }


  /* Sintaxe:
  nomeMetodo(parametro): retorno{
        logica;
        return algo;
        }
         */
  getHeroes(): Observable<Hero[]>{
    //TODO: send the message _after_ fetching the heroes
    /* Adicionada a condição if pois a mensagem
    *   HeroService: fetched heroes
    *   era adicionada a cada chamada do método getHeroes.
    * */
    if(this.messageService.messages[0]
      !== 'HeroService: fetched heroes'){
      this.messageService.add('HeroService: fetched heroes');
    }
    return of(HEROES);
  }

  getLoonaMembers(): Loona[]{
    return MEMBERS;
  }

  getLoonaMembersTwo(): Observable<Loona[]>{

    return of(MEMBERS);
  }

  getHero(id: number): Observable<Hero> {
    //TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
