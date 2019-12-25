import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToasterService} from './toaster.service';
import {Subscription} from 'rxjs';
import {Message, MessageStyle} from './toaster.model';

declare var $: any;

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit, OnDestroy {

  messages: Message;
  subscription: Subscription;

  constructor(private toastService: ToasterService) {
  }

  ngOnInit() {
    this.subscription = this.toastService.getMessage().subscribe((data) => {
      if (data instanceof Message) {
        // this.messages.length = 0;
        // const message: Message[] = [{
        //   content: 'Hello Dhaval!',
        //   position: 'bottom-right',
        //   style: MessageStyle.succuss
        // }];

        this.messages = data;
        //this.messages.push(data);
        console.log(this.messages);
        this.show_toaster();
      }
    });
  }

  show_toaster(): void {
    $('.toast').toast('show');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
