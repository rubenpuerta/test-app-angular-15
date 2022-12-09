import { inject } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../store/app.reducer';

export function stateInjector<T>(selector: (state: AppState) => T): Observable<T> {
  const store = inject(Store);
  return store.select(selector)
}

export function injectAction<T, V extends (...args: T[]) => Action>(
  actionCreator: V
): (...args: T[]) => void {
  const store = inject(Store);
  return (...args: T[]) => store.dispatch(actionCreator(...args));
}