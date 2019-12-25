import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  constructor() {
  }

  @Input() set setElements(data) {
    this.element = data;
  }

  element;
  ngOnInit() {
  }

}
