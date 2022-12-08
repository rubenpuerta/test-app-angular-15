import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import * as NavigationActions from './navigation.actions';

@Injectable({
  providedIn: 'root'
})
export class NavigationEffects {

  constructor(private action$: Actions, private router: Router,) { }

  public loadData$ = createEffect(() => 
    this.action$.pipe(
      ofType(NavigationActions.navigateToNextPage),
      tap(() => this.router.navigate(['more-info']))
    ), { dispatch: false})
}