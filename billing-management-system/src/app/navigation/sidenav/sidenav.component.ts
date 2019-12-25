import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService) { }

  isAuth: boolean = false;
  isAuthSubscribtion: Subscription;
  userSubscribtion: Subscription;

  imagePath;

  user: User;



  @Output('close') close = new EventEmitter<void>();
  ngOnInit() {
    this.isAuthSubscribtion = this.authService.isAuth.subscribe((isAuth) => this.isAuth = isAuth)



    this.userSubscribtion = this.authService.userChange.subscribe((user) => {
      // this.previewImage(user.profile)
      console.log(user);
      this.user = user;
    })
  }




  // previewImage(profile: File) {

  //   const mineType = profile.type;

  //   if (mineType.match(/image\/*/) === null) {
  //     return;
  //   }

  //   const fileReader = new FileReader();

  //   fileReader.readAsDataURL(profile);
  //   fileReader.onload = (event) => {
  //     this.imagePath = fileReader.result;
  //   }
  // }



  onclose(): void {
    this.close.emit();
    // this.navigationService.toggle.next();
  }
  ngOnDestroy(): void {
    this.isAuthSubscribtion.unsubscribe();
    this.userSubscribtion.unsubscribe();
  }
  onLogout() {
    this.authService.logout();
    this.onclose();
  }
}
