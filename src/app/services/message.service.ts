import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  /* Método add: recebe uma string por parametro*/
  add(message: string){
    /* Defino que minha propriedade messages
    *   que é um array de strings
    *   dará um push de cada mensagem.
    *   Imagine que messages é uma pilha de mensagens.
    *   Por isso o termo push.
    * */
    this.messages.push(message);
  }


  /* Posso definir o retorno como void quando nao retorna nada
  *   ou deixar apenas a assinatura do metodo.
  *
  *   clear() {
  *     do something;
  *   }
  *
  *   clear(): void{
  *     do something;
  *   }
  *  */
  clear(): void{
    this.messages = [];
  }

  constructor() { }
}
