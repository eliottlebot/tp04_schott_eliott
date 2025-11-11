import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  signup(userSignupData: UserSignupData): Observable<UserData> {
    return of({
      id: 1,
      login: userSignupData.login,
      password: userSignupData.password,
      name: userSignupData.firstname + ' ' + userSignupData.name,
      mailAddress: userSignupData.mailAddress,
    });
  }
}
