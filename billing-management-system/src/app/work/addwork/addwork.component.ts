import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Work } from '../work.model';
import { WorkService } from '../work.service';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-addwork',
  templateUrl: './addwork.component.html',
  styleUrls: ['./addwork.component.scss']
})
export class AddworkComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private workService: WorkService,
    private commonService: CommonService) {

  }

  work: Work;
  workerName: string;
  area: string;
  discription: string;
  amount: number;
  editMode = false;
  workSubscribtion: Subscription
  flag = false;
 

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((data) => {
      const enc = data.key;
      console.log(enc);
      if (enc) {
        const workId = this.commonService.base64toString(enc);

        this.flag = true;
        this.workSubscribtion = this.workService.getWork(+workId).subscribe(response => {
          if (response['data'][0])
            this.work = response['data'][0];
          this.editMode = true;
          this.workerName = this.work.workName;
          this.area = this.work.address;
          this.discription = this.work.discription;
          this.amount = this.work.amount;
        });
      }
    })

  }

  onSubmit(form: NgForm) {

    if (form.invalid) {
      return;
    }


    const user = JSON.parse(localStorage.getItem('user'));

    let work: Work;
    if (this.editMode) {
      work = {
        id: this.work.id,
        workName: form.value.workname,
        address: form.value.area,
        discription: form.value.discription,
        createddate: new Date(this.work.createddate),
        updateddate: new Date(),
        status: this.work.status,
        isCompleted: false,
        userId: user['id'],
        amount: form.value.amount
      }

      this.workService.editWork(work);
    } else {
      work = {
        workName: form.value.workname,
        address: form.value.area,
        discription: form.value.discription,
        createddate: new Date(),
        updateddate: new Date(),
        status: true,
        isCompleted: false,
        userId: user['id'],
        amount: form.value.amount
        // workers: []
      }
      this.workService.addWork(work);
    }

    this.router.navigate(['../'], { relativeTo: this.activatedRoute })
  }

  ngOnDestroy(): void {
    if (this.flag) {
      this.workSubscribtion.unsubscribe();
    }
  }
}

