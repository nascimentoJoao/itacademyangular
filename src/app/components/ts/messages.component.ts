import { Component, OnInit } from '@angular/core';
import { MessageService} from "../../services/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: '../html/messages.component.html',
  styleUrls: ['../css/messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
