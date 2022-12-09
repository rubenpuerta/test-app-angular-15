import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators'

import { ApiInfo } from 'src/app/interfaces';
import { GHIPY_API_KEY } from '../../../.private/ghipy.constants';
import { GhipyResponse } from '../interfaces/ghipy.interface';

@Injectable({
  providedIn: 'root'
})
export class GhipyApiService {

  constructor(private http: HttpClient) { }

  get(): Observable<ApiInfo[]> {
    return this.http.get<GhipyResponse>(`https://api.giphy.com/v1/gifs/trending?api_key=${GHIPY_API_KEY}&limit=15&rating=g`).pipe(
      delay(500),
      map(({ data }) => data.map(({ title, images }) => ({
        description: title,
        image: images.downsized_large.url || ''
      }))
    ));
  }

}


