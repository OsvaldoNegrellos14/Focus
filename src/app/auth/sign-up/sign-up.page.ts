import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  data: any = {};

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signUpFirebase() {
    const data = {email: this.data.email, first_name: this.data.name, username: this.data.username}
    this.auth.signUpFirebase(this.data.email, this.data.password, data);
  }


}
