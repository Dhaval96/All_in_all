import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-of-lended-money',
  templateUrl: './dialog-of-lended-money.component.html',
  styleUrls: ['./dialog-of-lended-money.component.scss']
})
export class DialogOfLendedMoneyComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  total = 0;

  input
  ngOnInit() {
    this.total = this.data;
  }


  onformSubmit(form: NgForm) {
    console.log(form);
    if (form.invalid) { return; }
    const amount = form.value['amount'];
    this.total += amount

    form.form.markAsUntouched;
    //form.form.markAsPristine;
    form.reset();
    //form.untouched;
  }
}
