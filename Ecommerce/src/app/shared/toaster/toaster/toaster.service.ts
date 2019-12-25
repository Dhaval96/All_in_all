import {Injectable, OnInit} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Message, MessageStyle} from './toaster.model';
// import {ToasterComponent} from './toaster.component';
declare var $: any;

@Injectable()


export class ToasterService {


  constructor() {
  }

  private subject = new Subject<Message>();
  // sendMessage(content, style) {
  //   const message = new Message(content, style);
  //   this.subject.next(message);
  // }

  success(content, position?) {
    this.subject.next(new Message(content, MessageStyle.succuss, position || 'bottom-right'));
  }

  info(content, position?) {
    this.subject.next(new Message(content, MessageStyle.info, position || 'bottom-right'));
  }

  warning(content, position?) {
    this.subject.next(new Message(content, MessageStyle.warning, position || 'bottom-right'));
  }

  danger(content, position?) {
    this.subject.next(new Message(content, MessageStyle.danger, position || 'bottom-right'));
  }

  getMessage(): Observable<Message> {
    return this.subject.asObservable();
  }

  clearMessage() {
    return this.subject.next();
  }
}
