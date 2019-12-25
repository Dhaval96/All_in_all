import { Component, OnInit, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }


  icon: string;
  message: string = "Sever is not working.";

  ngOnInit() {

    if (this.data['status'] === 200) {
      this.icon = 'check_circle'
    } else {
      this.icon = 'error'
    }

    if (this.data['status'] !== 0) {
      this.message = this.data['message'];
    }
  }

}
