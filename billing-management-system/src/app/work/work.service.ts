import { Injectable } from '@angular/core';
import { Work } from './work.model';
import { Subject, throwError } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material';
import { ToasterComponent } from '../common/toaster/toaster.component';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class WorkService {
    constructor(private _httpClient: HttpClient,
        private _snackBar: MatSnackBar) { }



    works: Work[] = [
        /*  {
             id: 2, workName: 'B', address: 'address2', discription: 'discription2',
             createddate: new Date(), updateddate: new Date(), status: true, isCompleted: false,
             workers: [{
                 id: 2, workerName: 'Worker_B', workerAddress: 'Address2',
                 workerType: 'kadiyo', phonenumber: 11231233333,
                 gender: 'female', wage: 110, lended_money: 20,
                 note: 'extra Note',
                 createdDate: new Date(), birthdate: new Date(),
                 updatedDate: new Date(), status: false
             },]
         },
         {
             id: 3, workName: 'C', address: 'address3', discription: 'discription3',
             createddate: new Date(), updateddate: new Date(), status: false, isCompleted: false,
             workers: [{
                 id: 3, workerName: 'Worker_C', workerAddress: 'Address3',
                 workerType: 'majur', phonenumber: 11233123123, gender: 'male',
                 wage: 220, lended_money: 12, note: 'extra Note',
                 createdDate: new Date(), birthdate: new Date(),
                 updatedDate: new Date(),
                 status: true
             },
             ]
         },
         {
             id: 1, workName: 'D', address: 'address4', discription: 'discription4',
             createddate: new Date(), updateddate: new Date(), status: true, isCompleted: false,
             workers: [{
                 id: 4, workerName: 'Worker_D', workerAddress: 'Address4',
                 workerType: 'majur', phonenumber: 1123123123, gender: 'female', wage: 110,
                 lended_money: 300, note: 'extra Note',
                 createdDate: new Date(), birthdate: new Date(),
                 updatedDate: new Date(), status: true
             }, {
                 id: 1, workerName: 'Worker_A', workerAddress: 'Address1',
                 workerType: 'majur', phonenumber: 1123123123, gender: 'male', wage: 120,
                 lended_money: 120, note: 'extra Note', createdDate: new Date(), birthdate: new Date(),
                 updatedDate: new Date(), status: true
             },]
         } */
    ]
    workChanged = new Subject<Work[]>();
    workForEdit = new Subject<Work>();

    addWork(work: Work) {
        // this.works.push(work);
        this._httpClient
            .post(environment.url + 'work/save',
                work, {
                observe: 'body',
            })
            .pipe(
            )
            .subscribe((response) => {
                this.success(response);
            })


        //this.works.push(work)
        //  this.workChanged.next(this.works)
    }

    fetchData() {

        const user = JSON.parse(localStorage.getItem('user'));

        this._httpClient.post(environment.url + 'work/getAll', { userId: user['id'] }).subscribe((response) => {
            this.success(response);
        }, error => {
            console.log(error);
        });
        ///  return this.works;
    }

    updateStatus(workId: number, status: boolean) {
        // no use
        this.works.filter((work) => {
            if (work.id === workId) {
                work.status = status;
            }
        })
        this.workChanged.next(this.works.slice());
    }

    editWork(updatedWork: Work) {


        this._httpClient.put(environment.url + 'work/update', updatedWork).subscribe((response) => {
        })
    }


    getWork(workId: number) {

        return this._httpClient.post(environment.url + 'work/get', { workId: workId })

        // return this.works.filter((work) => {
        //     return work.id === workId;
        // })[0]; // inside of filter use find direct object rather than array,
    }


    workCompleted(workId: number) {

        // not in use
        console.log(workId);
        // get only completed work from server side!!.

        this.works.map((work) => {
            if (work.id === workId) {
                work.isCompleted = true;
            }
        })
        // this.works[workId].isCompleted = true;
        this.workChanged.next(this.works);
        console.log(this.works);

    }



    private error() {
        //.. error!!
    }

    private success(response) {
        // .. success!!
        console.log(response);
        this.works = response['data'];

        if (this.works.length !== 0) {
            this.workChanged.next(this.works);
        }
    }
}