import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as userSelectors from './state/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  loading$: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(userSelectors.selectLoggingIn));
  }
}
