import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router, private _http: HttpClient, private _domSanitizer: DomSanitizer) { }
    user: User;
    userChange = new Subject<User>();
    isAuth = new Subject<boolean>();
    registration(formData) {
        // this.user = user;

        this._http.post(environment.url + 'api/signup', formData).subscribe((response) => {
            console.log(response);
            if (response['status'] !== 409) {
                this.router.navigate(['login']);
            }
        }, error => {

        })
    }

    login(username: string, password: string) {
        // if (!this.user) {
        //     return false;
        // }
        // if (this.user.username === username && this.user.password === password) {
        //     //return true;
        //     this.userChange.next(this.user);
        //     
        //     localStorage.setItem("user", JSON.stringify({ username: username, password: password }));

        // }

        return this._http.post(environment.url + 'api/login', { username: username, password: password }).subscribe((isAuthentication) => {
            console.log(isAuthentication);

            if (isAuthentication['data']) {
                this.user = isAuthentication['data']['user'];
                localStorage.setItem("user", JSON.stringify(this.user));
                localStorage.setItem("allow", JSON.stringify(isAuthentication['data']['allow']))
                //   this.userChange.next(this.user);
                this.router.navigate(['dashboard'])
            }
        })
    }

    logout() {
        this.user = null;
        localStorage.removeItem('user');
        this.isAuth.next(false);
        // this.userChange.next(this.user);
        this.router.navigate(['login'])
    }

    autoLogin() {

        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.isAuth.next(true);
        }
    }

    autologout() {
        // use when token expire
    }



    getUser() {
        //..//...///.....
    }
}