import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sidenav = new EventEmitter<void>();
  constructor(private authService: AuthService) { }

  isAuth: boolean = false;
  isAuthSubscribtion: Subscription;
  usersubscribtion: Subscription;

  currentUser: User;
  imagePath;

  ngOnInit() {
    this.isAuthSubscribtion = this.authService.isAuth.subscribe((isAuth) => {
      console.log(isAuth);
      this.isAuth = isAuth
    });

    this.usersubscribtion = this.authService.userChange.subscribe((user) => {
      this.currentUser = user;
      console.log(user);
    //  this.previewImage(user.profile);
    })
  }


  private previewImage(profile: File) {

    const mineType = profile.type;

    if (mineType.match(/image\/*/) === null) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.readAsDataURL(profile);
    fileReader.onload = (event) => {
      this.imagePath = fileReader.result;
    }
  }

  onclick() {
    this.sidenav.emit();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.isAuthSubscribtion.unsubscribe();
    this.usersubscribtion.unsubscribe();
  }
}
