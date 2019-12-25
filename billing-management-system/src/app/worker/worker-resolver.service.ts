import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable, OnDestroy } from '@angular/core';
import { WorkerService } from './worker.service';
import { Subscription } from 'rxjs';
import { CommonService } from '../common/common.service';


@Injectable({ providedIn: 'root' })
export class WorkerResolver implements Resolve<any> {

    constructor(private workerService: WorkerService, private commonservice: CommonService) { }

    workerSubscribtion: Subscription;

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //   this.workerService.getWorkByIds()

        const query = route.queryParams;
        let key;
        if (query.hasOwnProperty('key')) {
            key = this.commonservice.base64toString(query['key']);
            this.workerService.get_worker(+key);
        }

        this.workerService.fetchWork()
        return key;
    }
}