import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {


    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


        const promise = new Promise<boolean>((resolve, reject) => {
            // const user = JSON.parse(localStorage.getItem("user"));

            // if (user && user.username && user.password) {
            //     resolve(true)
            //     this.authService.isAuth.next(true);
            // } else {
            //     this.router.navigate(['login']);
            // }

            // replace this logic with token 

            console.log(route.url);
            const isuser = JSON.parse(localStorage.getItem("allow"))
            const user = JSON.parse(localStorage.getItem('user'));
            this.authService.userChange.next(user)

            if (isuser) {

                if (route.url[0].path === 'user' && user.role === 'admin') {
                    resolve(true)
                    this.authService.isAuth.next(true);
                } else if (route.url[0].path !== 'user'){
                    resolve(true)
                    this.authService.isAuth.next(true);
                }
                else {
                    this.authService.logout();
                    this.router.navigate(['login']);
                }
                
            } else {
                this.authService.logout();
                this.router.navigate(['login']);
            }
        })

        return promise;

    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute, state)
    }
}