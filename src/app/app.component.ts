import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from './models/user.model';
import * as userSelectors from './state/user.selectors';
import * as userActions from './state/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  loading$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(userSelectors.selectUser));
    this.loading$ = this.store.pipe(select(userSelectors.selectLoggingIn));
  }

  onLogout() {
    this.store.dispatch(userActions.logout());
  }
}
