import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';

@Injectable()
export class PanelService {
  constructor() {
  }

  flag = new Subject<boolean>();
  panelClose = new Subject<boolean>();


  openPanel(): void {
    this.flag.next(true);
  }

  getFlag(): Observable<boolean> {
    return this.flag.asObservable();
  }

  panel(): void {
    //alert('Dhaval');
    this.panelClose.next(true);
  }

  getClosePanel(): Observable<boolean> {
    return this.panelClose.asObservable();
  }
}
