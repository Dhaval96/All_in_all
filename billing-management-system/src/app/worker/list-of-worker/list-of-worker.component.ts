import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog, MatBottomSheet } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { IWorker } from '../worker.model';
import { WorkerService } from '../worker.service';
import { CommonService } from 'src/app/common/common.service';
import { Work } from 'src/app/work/work.model';
import { DialogOfLendedMoneyComponent } from '../dialog-of-lended-money/dialog-of-lended-money.component';
import { WorkerDetailComponent } from '../worker-detail/worker-detail.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-of-worker',
  templateUrl: './list-of-worker.component.html',
  styleUrls: ['./list-of-worker.component.scss']
})
export class ListOfWorkerComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute,
    private workerService: WorkerService,
    private commonService: CommonService,
    private router: Router,
    private matDialog: MatDialog,
    private matBottemSheet: MatBottomSheet, private _cd: ChangeDetectorRef) { }


  workers: IWorker[] = [];
  works: Work[];
  flag: boolean = false;
  flagOfAddUser = false;
  workId: number;
  checked;
  fetchWorkSubscribtion: Subscription;
  workerChangeSubscribtion: Subscription;

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['workername', 'workertype', 'phonenumber', 'wage', 'lended_money', 'status', 'action'];

  ngOnInit() {

    this.fetchWorkSubscribtion = this.workerService.workChange.subscribe((works) => {
      console.log(works);
      if (works) {
        this.works = works;
      }
    })
    // this.works = this.workerService.fetchWorker()
    // this.dataSource.data = this.workers;

    this.workerChangeSubscribtion = this.workerService.workerChange.subscribe((workers) => {
      console.log(workers);
      if (workers) {
        this.workers = workers;
        this.dataSource.data = this.workers;
        this.flagOfAddUser = true;
      }
    })


    this.activatedRoute.data.subscribe((data) => {

      if (data['workId'] !== undefined) {
        this.workId = data['workId'];
      }
      console.log(this.workId);

    })


    this.queryParams(); // to set the work by default

    // this.workerService.workerChange.subscribe((worker) => {
    //   console.log(worker);
    //   //  this.works = worker
    // })
  }

  private queryParams() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (queryParams) {
        const base64 = queryParams['key'];
        if (base64) {
          this.workId = + this.commonService.base64toString(base64);

        }
      }
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }



  onClick(id) {

    this.workId = id;
    //const work = this.works.find((obj) => obj.id === id);
    this.workerService.get_worker(this.workId);

  }

  addWorker() {
    const enc = this.commonService.toBase64(this.workId);
    this.router.navigate(['/worker', 'addWorker'],
      {
        relativeTo: this.activatedRoute,
        queryParams: { workKey: enc },
        fragment: this.commonService.toBase64('add')
      })
  }

  onToggleChange(workId: number, element: IWorker, status) {

    element.status = status;
    element.birthdate = new Date(element.birthdate);
    //this.workerService.addOrUpdateWorker(workId, element) // update the status


    this.workerService.updateStatus(this.workId, element)

    // this.workerService.updateStatus(workId, element.id, status);

  }

  onEdit(element) {
    console.log(this.workId);
    console.log();
    this.router.navigate(['worker', 'addWorker'],
      {
        fragment: this.commonService.toBase64('edit'),
        queryParams: {
          workerKey: this.commonService.toBase64(element.id),
          workKey: this.commonService.toBase64(this.workId)
        }
      });
  }

  ngOnDestroy() {
    this.fetchWorkSubscribtion.unsubscribe();
    this.workerChangeSubscribtion.unsubscribe();
  }

  onOpenDialog(element: IWorker) {


    const dialog = this.matDialog.open(DialogOfLendedMoneyComponent, {
      data: element.lended_money
    });

    dialog.afterClosed().subscribe(result => {


      if (result) {

        element.lended_money = result;
        element.birthdate = new Date(element.birthdate);
        this.workerService.updateStatus(this.workId, element)
        //  this.workerService.update_lended_money(this.workId, element.id, result)
      }
    })
  }

  openBotternSheet(workerId: number) {
    //  const worker = this.workerService.getWorker(this.workId, workerId);
    this.matBottemSheet.open(WorkerDetailComponent, {
      data: workerId
    })
  }
}
