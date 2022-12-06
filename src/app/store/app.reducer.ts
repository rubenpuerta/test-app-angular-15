import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';

import * as uiReducer from 'src/app/store/ui.reducer';
import * as fakeApiReducer from 'src/app/store/fake-api.reducer';


export interface AppState {
  [uiReducer.name]: uiReducer.UIState;
  [fakeApiReducer.name]: fakeApiReducer.UserState;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>(
  'Root reducers token',
  {
    factory: () => ({
      [uiReducer.name]: uiReducer.reducer,
      [fakeApiReducer.name]: fakeApiReducer.reducer
    })
  }
);
