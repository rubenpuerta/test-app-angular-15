import { Injectable } from '@angular/core';
import { } from '@angular/material/legacy-snack-bar';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';

import * as UIActions from './ui.actions';
import * as NavigationActions from './navigation.actions';
import * as ApiActions from './api.actions';
import { AuthService } from '../services/auth.service';

const alertMessageConfig: MatSnackBarConfig = {
  panelClass: 'errorAlertMessage',
  duration: 80000,
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
      ofType(ApiActions.loadData),
      map(() => UIActions.startLoading()),
    ));
  
  public stopLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.loadDataSuccess),
      map(() => UIActions.stopLoading()),
    ));
  
  public showErrorMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.loadDataError),
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
        alertMessageConfig.panelClass = 'warningAlertMessage';
        this.snackBar.open(message, buttonLabel, alertMessageConfig);
    })),
    { dispatch: false }
  );          
  
  // public startLoading$ = createEffect(() =>
  //   inject(Actions).pipe(
  //     ofType(ApiActions.loadApiData),
  //     map(() => UIActions.startLoading()),
  //   )
  // );

  // public stopLoading$ = createEffect(() =>
  //   inject(Actions).pipe(
  //     ofType(ApiActions.loadApiDataSucceeded),
  //     map(() => UIActions.stopLoading()),
  //   )
  // );
  
  // public showErrorMessage$ = createEffect(() =>
  //   inject(Actions).pipe(
  //     ofType(ApiActions.loadApiDataError),
  //     tap(() => {
  //       const snackBar = inject(MatSnackBar);
  //       const message = 'An error occurred while loading users information';
  //       const buttonLabel = 'Ok';
  //       alertMessageConfig.verticalPosition = 'top';
  //       snackBar.open(message, buttonLabel, alertMessageConfig);
  //     })
  //   ),
  //   { dispatch: false }
  // );      

  // public showAuthErrorMessage$ = createEffect(() =>
  //   inject(Actions).pipe(
  //     ofType(
  //       NavigationActions.navigateToNextPage
  //     ),
  //     filter(() => !inject(AuthService).isLogged()),
  //     tap(() => {
  //       const snackBar = inject(MatSnackBar);
  //       const message = 'You need to login';
  //       const buttonLabel = 'Ok';
  //       alertMessageConfig.panelClass = ['warningAlertMessage']
  //        snackBar.open(message, buttonLabel, alertMessageConfig);
  //     })
  //   ),
  //   { dispatch: false }
  // );    
}