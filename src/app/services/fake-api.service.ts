import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators'

import { reqresResponse, User, UserData } from 'src/app/interfaces';


@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private http: HttpClient) { }


  get(): Observable<User[]> {
    return this.http.get<reqresResponse>('https://reqres.in/api/users?page=1').pipe(
      delay(500),
      map(({ data }) => { 
        return data.map(
          ({ id, email, first_name, last_name, avatar }: UserData) => ({
            id,
            name: `${first_name} ${last_name}`,
            email,
            avatar
          }));
      }));
  }

  
}