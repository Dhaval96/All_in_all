import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpinnerService {

    isloading = new Subject<Boolean>();

    show() {
        this.isloading.next(true);
    }

    hide() {

        setTimeout(() => {
            this.isloading.next(false);
        }, 500)
    }

}