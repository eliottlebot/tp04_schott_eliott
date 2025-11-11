import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Pollution } from '../models/types/Pollution';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiURL: string = environment.apiURL;
  constructor(private http: HttpClient) {}

  signup(userSignupData: UserSignupData): Observable<UserData> {
    return this.http.post<UserData>(`${this.apiURL}/utilisateur/signup`, userSignupData);
  }

  getAllUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(`${this.apiURL}/utilisateur`);
  }
}
