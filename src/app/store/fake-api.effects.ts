import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';


import { InfoService } from '../services/info.service';
import * as FakeApiActions from './fake-api.actions';

@Injectable({
  providedIn: 'root'
})
export class FakeApiEffects {

  constructor(private action$: Actions, private infoService: InfoService) { }

  public loadData$ = createEffect(() => 
    this.action$.pipe(
      ofType(FakeApiActions.loadData),
      switchMap(() => this.infoService.getUsers().pipe(
        map((users) => FakeApiActions.loadDataSuccess({ users })),
        catchError(() => of(FakeApiActions.loadDataError()) )
      )))
    )
}