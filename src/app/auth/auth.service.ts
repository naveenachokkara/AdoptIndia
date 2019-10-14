import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  Login(email: string, password: string): Observable<User> {
   const user: User =  {
     id: '123445rffd',
     email : 'jyothimamidi@gmail.com'
    };
   return this.http.post<User>('url', {email, password});
  // return user ;
  }
}
