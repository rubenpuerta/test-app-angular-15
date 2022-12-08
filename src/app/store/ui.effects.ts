import { Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar, MatLegacySnackBarConfig as MatSnackBarConfig } from '@angular/material/legacy-snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';

import * as FakeApiActions from './fake-api.actions';
import * as UIActions from './ui.actions';
import * as NavigationActions from './navigation.actions';
import { AuthService } from '../services/auth.service';

const alertMessageConfig: MatSnackBarConfig = {
  panelClass: ['errorAlertMessage'],
  duration: 8000,
  horizontalPosition: 'center',
  verticalPosition: 'bottom',
};

@Injectable({
  providedIn: 'root'
})
export class UIEffects {

  constructor(private actions$: Actions, private snackBar: MatSnackBar, private authService: AuthService) { }

  public startLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FakeApiActions.loadData),
      map(() => UIActions.startLoading()),
    ));
  
  public stopLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FakeApiActions.loadDataSuccess),
      map(() => UIActions.stopLoading()),
    ));
  
  public showErrorMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FakeApiActions.loadDataError),
      tap(() => {
        const message = 'An error occurred while loading users information';
        const buttonLabel = 'Ok';
        alertMessageConfig.verticalPosition = 'top';
        this.snackBar.open(message, buttonLabel, alertMessageConfig);
      })),
    { dispatch: false }
  );          
  
  public showAuthErrorMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        NavigationActions.navigateToNextPage
      ),
      filter(() => !this.authService.isLogged()),
      tap(() => {
        const message = 'You need to login';
        const buttonLabel = 'Ok';
        alertMessageConfig.panelClass = ['warningAlertMessage']
        this.snackBar.open(message, buttonLabel, alertMessageConfig);
    })),
    { dispatch: false }
  );          
}