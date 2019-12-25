import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Work } from '../work.model';
import { WorkService } from '../work.service';
import { CommonService } from 'src/app/common/common.service';
import { WorkDetailComponent } from 'src/app/work/work-detail/work-detail.component';
import { timeInterval } from 'rxjs/operators';
@Component({
  selector: 'app-list-of-work',
  templateUrl: './list-of-work.component.html',
  styleUrls: ['./list-of-work.component.scss']
})
export class ListOfWorkComponent implements OnInit, OnDestroy {

  constructor(private workService: WorkService, private router: Router,
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
    private _bottomSheet: MatBottomSheet) { }
  works: Work[] = [];
  flag: boolean = false;


  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['workname', 'address', 'date', 'status', 'action'];
  workSubscribtion: Subscription;
  ngOnInit() {
    this.workService.fetchData()

    this.workSubscribtion = this.workService.workChanged.subscribe(work => {
      this.works = work;
      if (this.works !== null) {
        this.dataSource.data = this.works;
      }
    })
  }



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.workSubscribtion.unsubscribe();
  }


  navigateToWorker(id) {

    const enc = this.commonService.toBase64(id);
    this.router.navigate(['/worker', 'listOfWorker'],
      { queryParams: { key: enc }, relativeTo: this.activatedRoute },
    )
  }

  onToggleChange(element: Work, status) {
    // const id = element.id;
    element.status = status;

    this.update(element);
  }

  onEdit(id: number) {

    this.router.navigate(['/work/editWork'],
      {
        queryParams: { key: this.commonService.toBase64(id) },
        relativeTo: this.activatedRoute
      })
  }

  onWorkCompleted(element: Work) {


    let flag = confirm('Are you sure?');

    if (flag) {
      element.isCompleted = true;
      // this.workService.workCompleted(element);
      this.update(element);
    }
  }

  onWorkDetails(element) {

    //const work = this.workService.getWork(workId);
    this._bottomSheet.open(WorkDetailComponent, {
      data: element
    })
  }

  private update(element) {
    element.createddate = new Date(element.createddate);
    element.updateddate = new Date();
    this.workService.editWork(element);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
