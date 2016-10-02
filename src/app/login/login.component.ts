import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User }    from './../user';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  model = new User('', '');

  constructor(public af: AngularFire, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.af.auth.login({ email: this.model.email, password: this.model.password }).then(() => {
      console.log('authenticated')
      this.model = new User('', '');
      this.router.navigate(['/items'])
    });
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/login'])
  }
}
