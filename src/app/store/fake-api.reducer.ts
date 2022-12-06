import { Action, createFeature, createReducer, on, State } from '@ngrx/store';

import { User } from 'src/app/interfaces';
import * as FakeApiActions from './fake-api.actions';


export interface UserState {
  users: User[]
}

export const initialState: UserState = {
  users: []
}

const fakeApiReducer = createReducer(
  initialState,
  on(FakeApiActions.loadDataSuccess, (state, { users }) => {
    return ({ ...state, users })
  }),
);

export const fakeApiFeature = createFeature({
  name: 'users',
  reducer: fakeApiReducer
});

export const {
  name, 
  reducer,
  selectUsers,
  selectUsersState
} = fakeApiFeature;
