import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';


import { InfoService } from '../services/info.service';
import * as ApiActions from './api.actions';

@Injectable({
  providedIn: 'root'
})
export class ApiEffects {

  constructor(private action$: Actions, private infoService: InfoService) { }

  public loadData$ = createEffect(() => 
    this.action$.pipe(
      ofType(ApiActions.loadData),
      switchMap(() => this.infoService.getUsers().pipe(
        map((data) => ApiActions.loadDataSuccess({ data })),
        catchError(() => of(ApiActions.loadDataError()) )
      )))
    )
}