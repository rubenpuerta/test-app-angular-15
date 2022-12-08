import { createAction, props } from '@ngrx/store';
import { ApiInfo } from 'src/app/interfaces';

export const loadData = createAction('[Api] Load api data');
export const loadDataSuccess = createAction('[Api] Load api data succeeded',
  props<{ data: ApiInfo[] }>());
export const loadDataError = createAction('[Api] Load api data error');

