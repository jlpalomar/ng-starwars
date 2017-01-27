import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person:any;

  constructor() { }

  ngOnInit() { }

}
