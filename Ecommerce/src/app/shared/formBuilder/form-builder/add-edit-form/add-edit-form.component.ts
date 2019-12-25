import {Component, OnInit} from '@angular/core';
import {Components, Display} from '../formBuilder.model';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {

  constructor() {
  }

  display: Display;

  ngOnInit() {
  }
}
