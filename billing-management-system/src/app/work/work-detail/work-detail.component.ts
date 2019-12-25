import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { Work } from '../work.model';
import { Subscription } from 'rxjs';
import { WorkService } from '../work.service';
import { WorkerService } from 'src/app/worker/worker.service';
import { IWorker } from 'src/app/worker/worker.model';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit, OnDestroy {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public _data: Work, private _workerService: WorkerService) { }

  worker: IWorker[] = [];;
  workSubscribtion: Subscription;

  ngOnInit() {
    console.log(this._data)
    // if (this._data.workers) {
    //   this.worker = this._data.workers.length;
    // }

    /*  this.workSubscribtion = this._workservice.getWork(+this._data).subscribe((response) => {
 
     }) */

    this._workerService.get_worker(this._data.id);

    this._workerService.workerChange.subscribe((response) => {
      if (response) {
        this.worker = response
      }
    })


  }


  ngOnDestroy(): void {
    //this.workSubscribtion.unsubscribe();
  }
}
