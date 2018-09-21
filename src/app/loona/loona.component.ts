import { Component, OnInit } from '@angular/core';
import { Loona } from '../objects/loona';
import { MEMBERS } from '../mock/mock-loona';

@Component({
  selector: 'app-loona',
  templateUrl: './loona.component.html',
  styleUrls: ['./loona.component.css']
})
export class LoonaComponent implements OnInit {

  loona_members: Loona[];
  selectedLoonaMember: Loona;

  constructor() { }

  ngOnInit() {
    this.loona_members = MEMBERS;
  }

  onSelectMember(member: Loona):void{
    this.selectedLoonaMember = member;
  }

}
