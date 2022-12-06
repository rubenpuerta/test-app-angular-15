import { Action, createFeature, createReducer, on, State } from '@ngrx/store';

import { User } from 'src/app/interfaces';
import * as UIActions from './ui.actions'


export interface UIState {
  isLoading: boolean
}

export const initialState: UIState = {
  isLoading: false
}

const uiReducer = createReducer(
  initialState,
  on(UIActions.startLoading, (state) => ({
    ...state, isLoading: true
  })),
  on(UIActions.stopLoading, (state) => ({
    ...state, isLoading: false
  }))

);

export const uiFeature = createFeature({
  name: 'ui',
  reducer: uiReducer
});

export const {
  name, 
  reducer,
  selectIsLoading
} = uiFeature;
