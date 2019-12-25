import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Custom_Validator } from '../custom-validator';
import { WorkerService } from '../worker.service';
import { CommonService } from 'src/app/common/common.service';
import { IWorker } from '../worker.model';


@Component({
  selector: 'app-addworker',
  templateUrl: './addworker.component.html',
  styleUrls: ['./addworker.component.scss']
})
export class AddworkerComponent implements OnInit {

  maxDate;

  workerId: number;
  workerForm: FormGroup;
  workId: number;
  fragmentType;
  editMode: boolean = false;
  previousworkerData: IWorker;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private workerService: WorkerService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 16);



    this.initializeForm();
    // /^[a-zA-Z0-9]*$/
    this.queryParams();
  }

  private initializeForm() {
    this.workerForm = new FormGroup({
      'workId': new FormControl(this.workId),
      'workerName': new FormControl(null, [Validators.required]),
      'workerType': new FormControl(null, [Validators.required]),
      'workerAddress': new FormControl(null, [Validators.required]),
      'gender': new FormControl(null, [Validators.required]),
      'birthdate': new FormControl(null, [Validators.required]),
      'wage': new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/),
      Custom_Validator.PRICE_CUSTOM_VALIDATOR]),
      'lended_money': new FormControl(0, [Validators.pattern(/^[0-9]+[0-9]*$/), Custom_Validator.PRICE_CUSTOM_VALIDATOR]),
      'note': new FormControl(null),
      'phonenumber': new FormControl('', [Validators.required, Validators.pattern(/^\s*\d+$/), Custom_Validator.NUMBER_CUSTOM_VALIDATOR])
    })
  }
  private queryParams() {

    this.activatedRoute.fragment.subscribe((code) => {
      this.fragmentType = this.commonService.base64toString(code);

    })


    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (queryParams) {
        const base64 = queryParams['workKey'];
        const encWorkerId = queryParams['workerKey'];



        if (base64 !== undefined && base64) {
          this.workId = + this.commonService.base64toString(base64);
        }

        if (encWorkerId !== undefined && encWorkerId && this.fragmentType === 'edit') {
          this.editMode = true;
          this.workerId = +this.commonService.base64toString(encWorkerId);
          // this.previousworkerData = this.workerService.getWorker(this.workId, this.workerId);

          this.workerService.getWorker(this.workerId).subscribe((response) => {

            if (response['data'][0]) {
              const previousWorkerData = response['data'][0];
              this.workerForm.patchValue({
                // 'id': Math.random(),
                'workerName': previousWorkerData.workerName,
                'workerType': previousWorkerData.workerType,
                'workerAddress': previousWorkerData.workerAddress,
                'gender': previousWorkerData.gender,
                'birthdate': new Date(previousWorkerData.birthdate),
                'wage': previousWorkerData.wage,
                'lended_money': previousWorkerData.lended_money,
                'note': previousWorkerData.note,
                'phonenumber': previousWorkerData.phonenumber,
                'createdDate': new Date(previousWorkerData.createdDate),
                'updatedDate': new Date(previousWorkerData.updatedDate),
                'status': previousWorkerData.status,
                'workId': this.workId
              })
            }
          })
        }
      }
    })



  }

  onSubmit(): void {

    if (this.workerForm.invalid) {
      return;
    }

    console.log(this.workerForm);
    if (this.editMode) {
      //this.workerService.updateWorker(this.workId, this.workerId, this.workerForm.value, this.previousworkerData);
      this.workerService.updateWorker(this.workId, this.workerId, this.workerForm.value);
    } else {
      this.workerService.addWorker(this.workId, this.workerForm.value);
    }
    this.router.navigate(['../'], { relativeTo: this.activatedRoute })
  }


}
