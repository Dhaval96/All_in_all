import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }



  onLogin(form: NgForm) {

    if (form.invalid) {
      return;
    }
    console.log(form.value);
    const username = form.value['username'];
    const password = form.value['password'];

    this.authService.login(username, password)

  }
}
