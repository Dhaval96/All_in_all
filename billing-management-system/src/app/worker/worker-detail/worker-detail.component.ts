import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { IWorker } from '../worker.model';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.scss']
})
export class WorkerDetailComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: IWorker, private workerService: WorkerService) { }

  @Input() worker: IWorker;
  flag = false;

  ngOnInit() {
    if (!this.worker) {
      this.flag = true;
      const workerId = this.data;
      this.workerService.getWorker(+workerId).subscribe((response) => {
        if (response['data'][0]) {
          this.worker = response['data'][0];
        }
      });
    }

  }

}
