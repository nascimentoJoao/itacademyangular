import { Component, OnInit, Input } from '@angular/core';
import { Loona } from '../../objects/loona'

@Component({
  selector: 'app-loona-detail',
  templateUrl: '../html/loona-detail.component.html',
  styleUrls: ['../css/loona-detail.component.css']
})
export class LoonaDetailComponent implements OnInit {

  @Input() member: Loona;

  constructor() { }

  ngOnInit() {
  }

}
