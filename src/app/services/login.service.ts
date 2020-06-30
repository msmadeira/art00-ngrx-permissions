import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  logUserIn(): Observable<User> {
    const user = { id: 121 };

    return of(user)
      .pipe(delay(400));
  }
}
