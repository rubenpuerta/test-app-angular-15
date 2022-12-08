import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// import { ReqresApiService } from 'src/app/services';
import { ApiInfo } from '../interfaces/api-info.interface';
import { GhipyApiService } from './giphy-api.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private infoService: GhipyApiService) { }

  getUsers(): Observable<ApiInfo[]> {
    return this.infoService.get();
  }
}
