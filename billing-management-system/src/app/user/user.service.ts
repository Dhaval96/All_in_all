import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../auth/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {


    constructor(private _http: HttpClient) { }

    getUsers() {
        return this._http.get(environment.url + 'api/getAll')
    }



    update(user: User) {
        this._http.post(environment.url + 'api/update', { status: user.status, userId: user.id }).subscribe((response) => {

        });
    }
}