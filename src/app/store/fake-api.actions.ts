import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces';

export const loadData = createAction('[Fake api] Load api data');
export const loadDataSuccess = createAction('[Fake api] Load api data succeeded',
  props<{ users: User[] }>());
export const loadDataError = createAction('[Fake api] Load api data error');

