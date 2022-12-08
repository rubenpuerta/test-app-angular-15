import { createFeature, createReducer, on } from '@ngrx/store';

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
