import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(private spinnerService: SpinnerService) { }
  isLoading: Subject<Boolean>;
  ;
  ngOnInit() {
    this.isLoading = this.spinnerService.isloading;
  }

}
