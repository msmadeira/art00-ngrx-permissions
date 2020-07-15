import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { User } from '../models/user.model';
import { Features } from '../permission/models/features.enum';
import { Permission } from '../permission/models/permissions.enum';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  user: User = {
    id: 1,
    username: 'user@manager.com',
    password: '123',
    featurePermissions: [{
      feature: Features.Posts,
      permission: Permission.View,
    }],
  };

  admin: User = {
    id: 2,
    username: 'admin@manager.com',
    password: '123',
    featurePermissions: [{
      feature: Features.Posts,
      permission: Permission.Admin,
    }],
  };

  logUserIn(username: string, password: string): Observable<User> {
    let user: User;

    if (username === this.user.username && password === this.user.password) {
      user = this.user;
    } else if (username === this.admin.username && password === this.admin.password) {
      user = this.admin;
    } else {
      throw false;
    }

    return of(user)
      .pipe(delay(400));
  }
}
