import { createAction, props } from '@ngrx/store';
import { ApiInfo } from 'src/app/interfaces';


export const loadData = createAction('[Api] Load api data');
export const loadDataSuccess = createAction('[Api] Load api data succeeded', props<{ data: ApiInfo[] }>());
export const loadDataError = createAction('[Api] Load api data error');


// https://ngrx.io/api/store/createActionGroup

// export const ApiActions = createActionGroup({
//   source: '[Api]',
//   events: {
//     'Load api data': emptyProps(),
//     'Load api data succeeded': props<{ data: ApiInfo[] }>(),
//     'Load api data error': emptyProps()
//   }
// })