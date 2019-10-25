import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  Login(email: string, password: string): any {
    const result = {
      token: 'test123',
      email,
      userId: 'test123'
    };
    //  return this.http.post<User>('url', {email, password});
    return new Observable((observer) => {
      observer.next(result);
      observer.complete();
    });
  }
}
