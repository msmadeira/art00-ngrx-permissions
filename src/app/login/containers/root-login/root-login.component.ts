import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Store } from '@ngrx/store';

import * as userActions from '../../../state/user.actions';

@Component({
  selector: 'app-root-login',
  templateUrl: './root-login.component.html',
  styleUrls: ['./root-login.component.scss'],
})
export class RootLoginComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLogin() {
    const value = this.form.value;
    this.store.dispatch(userActions.login({ username: value.email, password: value.password }));
  }
}
