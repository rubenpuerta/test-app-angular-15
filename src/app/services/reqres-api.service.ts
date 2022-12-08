import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators'

import { ApiInfo, reqresResponse, ReqresUserData } from 'src/app/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ReqresApiService {

  constructor(private http: HttpClient) { }


  get(): Observable<ApiInfo[]> {
    return this.http.get<reqresResponse>('https://reqres.in/api/users?page=1').pipe(
      delay(500),
      map(({ data }) => { 
        return data.map(
          ({ first_name, last_name, avatar }: ReqresUserData) => ({
            description: `${first_name} ${last_name}`,
            image: avatar
          }));
      }));
  }

  
}