import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Work } from '../work/work.model';
import { IWorker } from './worker.model';
import { WorkService } from '../work/work.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class WorkerService {
    constructor(private workService: WorkService, private _http: HttpClient) { }

    workerChange = new Subject<IWorker[]>();
    workChange = new Subject<Work[]>();






    works: Work[] = [
        // {
        //     id: 2, workName: 'B', address: 'address2', discription: 'discription2', createddate: new Date(), updateddate: new Date(), status: true,
        //     workers: [{
        //         id: 2, workerName: 'Worker_B', workerAddress: 'Address2',
        //         workerType: 'kadiyo', phonenumber: 11231233333, gender: 'female', wage: 110, lended_money: 20, note: 'extra Note', date: new Date(), status: false
        //     },]
        // },
        // {
        //     id: 3, workName: 'C', address: 'address3', discription: 'discription3', createddate: new Date(), updateddate: new Date(), status: false,
        //     workers: [{
        //         id: 3, workerName: 'Worker_C', workerAddress: 'Address3',
        //         workerType: 'majur', phonenumber: 11233123123, gender: 'male', wage: 220, lended_money: 12, note: 'extra Note', date: new Date(), status: true
        //     },
        //     ]
        // },
        // {
        //     id: 1, workName: 'D', address: 'address4', discription: 'discription4', createddate: new Date(), updateddate: new Date(), status: true,
        //     workers: [{
        //         id: 4, workerName: 'Worker_D', workerAddress: 'Address4',
        //         workerType: 'majur', phonenumber: 1123123123, gender: 'female', wage: 110, lended_money: 300, note: 'extra Note', date: new Date(), status: true
        //     }, {
        //         id: 1, workerName: 'Worker_A', workerAddress: 'Address1',
        //         workerType: 'majur', phonenumber: 1123123123, gender: 'male', wage: 120, lended_money: 120, note: 'extra Note', date: new Date(), status: true
        //     },]
        // }
    ]



    fetchWorker() {
        // this.works =
        //  this.workService.fetchData();
        //return this.works.slice();
    }

    getWork(id: number) {
        return this.works.filter((obj) => obj.id === +id).slice();
    }

    addWorker(workId: number, data: IWorker): void {


        this._http.post(environment.url + 'api/worker', {
            worker:
            {
                ...data, createdDate: new Date(), updatedDate: new Date(),
                status: true, workId: workId
            }
        }).subscribe((response) => {
            console.log(response);
        })

        // this.workerChange.next(this.works);
    }




    updateStatus(workId: number, updatedData: IWorker) {
        this._http.post(environment.url + 'api/worker', {
            worker:
            {
                ...updatedData,
                createdDate: new Date(updatedData.createdDate),
                updatedDate: new Date(),
                workId: workId
            }
        }).subscribe((response) => {
            console.log(response);
        })
    }

    getWorker(workerId: number) {
        // this.works.filter((work) => {
        //     if (work.id === workId) {
        //         // return work.workers.find((worker) => worker.id === workerId)
        //     }
        // })[0];

        //    const index = this.works.findIndex(work => work.id === workId);

        // return this.works[index].workers.find((worker) => worker.id === workerId);


        return this._http.post(environment.url + 'api/worker/getWorker', { workerId })
    }

    updateWorker(workId, workerId, updatedData: IWorker) {

        /*   //  console.log(this.works);
          this.works.filter((work) => {
              if (work.id === workId) {
                  // const index = work.workers.findIndex((worker) => worker.id === workerId);
                  //work.workers.splice(index, 1);
                  // work.workers[index] = {
                  //     ...updatedData,
                  //     status: previousData.status,
                  //     createdDate: previousData.createdDate,
                  //     updatedDate: new Date()
                  // };
              }
          })
  
          // console.log(this.works);
          //   this.workerChange.next(this.works); */

        this._http.post(environment.url + 'api/worker', {
            worker:
            {
                ...updatedData, createdDate: new Date(updatedData.createdDate), updatedDate: new Date(),
                status: true, workId: workId, id: workerId
            }
        }).subscribe((response) => {
            console.log(response);
        })


    }

    update_lended_money(workId, workerId, updatedLendedMoney) {

        this.works.filter((work) => {
            if (work.id === workId) {
                // work.workers.map((worker) => {
                //     if (worker.id === workerId) {
                //         worker.lended_money = updatedLendedMoney;
                //     }
                // })
            }
        })

        console.log(this.works);
    }


    fetchWork() {

        const user = JSON.parse(localStorage.getItem('user'));
        return this._http.post(environment.url + 'work/getAll', { userId: user['id'] }).subscribe((response) => {
            if (response['data']) {
                this.works = response['data'];
                this.workChange.next(this.works);
            }
        });
    }





    get_worker(workId: number) {
        return this._http.post(environment.url + 'api/worker/getAll', { workId: workId }).subscribe((response) => {
            if (response['data']) {
                this.workerChange.next(response['data']);
            }
        })
    }
}
