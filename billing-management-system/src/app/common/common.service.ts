import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommonService {

    constructor() { }


    transfer = new Subject<any>()
    image = new Subject<File>();

    toBase64(data) {
        return window.btoa(data);
    }
    base64toString(enc) {
        return window.atob(enc);
    }

    sendImage(image: File) {
        this.image.next(image);
    }

    getImage() {
        return this.image;
    }

    // sendData(componentName: string, data: any) {
    //     this.transfer.next({ ...data, componentName: componentName });
    // }

    // getData() {
    //     return this.transfer;
    // }
}