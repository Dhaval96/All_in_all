import { Injectable } from '@angular/core';
import { WorkService } from '../work/work.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DashboardService {

    constructor(private _http: HttpClient) { }

    getDashboardData() {
        const user = JSON.parse(localStorage.getItem('user'));
        return this._http.post(environment.url + 'work/getDashboard', { userId: user['id'] })

    }

}