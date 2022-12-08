import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';

import * as uiReducer from 'src/app/store/ui.reducer';
import * as apiReducer from 'src/app/store/api.reducer';


export interface AppState {
  [uiReducer.name]: uiReducer.UIState;
  [apiReducer.name]: apiReducer.ApiState
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>(
  'Root reducers token',
  {
    factory: () => ({
      [uiReducer.name]: uiReducer.reducer,
      [apiReducer.name]: apiReducer.reducer
    })
  }
);
