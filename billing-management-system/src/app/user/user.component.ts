import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UserService } from './user.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit {

  constructor(private userService: UserService) { }

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'username', 'date', 'status'];
  ngOnInit() {

    this.userService.getUsers().subscribe((response) => {
      console.log(response);
      if (response['data']) {
        this.dataSource.data = response['data'];
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onToggleChange(element: User, status) {
    // const id = element.id;
    element.status = status;

    this.userService.update(element);
  }
}
