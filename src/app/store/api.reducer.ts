import { createFeature, createReducer, on } from '@ngrx/store';

import * as FakeApiActions from './api.actions';
import { ApiInfo } from '../interfaces/api-info.interface';


export interface ApiState {
  data: ApiInfo[]
}

export const initialState: ApiState = {
  data: []
}

const fakeApiReducer = createReducer(
  initialState,
  on(FakeApiActions.loadDataSuccess, (state, { data }) => {
    return ({ ...state, data })
  }),
);

// https://ngrx.io/api/store/createFeature

export const fakeApiFeature = createFeature({
  name: 'users',
  reducer: fakeApiReducer
});

export const {
  name, 
  reducer,
  selectData,
  selectUsersState
} = fakeApiFeature;
