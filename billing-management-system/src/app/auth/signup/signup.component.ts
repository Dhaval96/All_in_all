import { Component, OnInit, OnDestroy, ContentChild, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {


  constructor(private authService: AuthService, private commonService: CommonService) { }

  @ViewChild('file', { static: false }) file: ElementRef;

  user: User;
  userSubscribtion: Subscription;
  imageSubscribtion: Subscription;
  profile: File;


  ngOnInit() {
    this.userSubscribtion = this.authService.userChange.subscribe(user => console.log(user));

    this.imageSubscribtion = this.commonService.getImage().subscribe((image) => {
      console.log(image);
      this.profile = image;
    });
  }

  onSubmit(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.user = form.value;
    this.user.createddate = new Date();
    this.user.status = true;
    this.user.profile = ''
    this.user.role = 'user'
    this.user.updateddate = new Date();


    let formData = new FormData();


    if (!this.profile) {
      alert('Please upload your profile.')
    } else {
      formData.append('file', this.profile);

      formData.append('user', JSON.stringify(this.user));

      this.authService.registration(formData);
    }



  }



  onImage(event) {
    console.log(JSON.parse(event));

  }
  ngOnDestroy(): void {
    this.userSubscribtion.unsubscribe();
    this.imageSubscribtion.unsubscribe();
  }
}
