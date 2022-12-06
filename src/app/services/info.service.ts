import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces';

import { FakeApiService } from 'src/app/services';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private infoService: FakeApiService) { }

  getUsers(): Observable<User[]> {
    return this.infoService.get();
  }
}
