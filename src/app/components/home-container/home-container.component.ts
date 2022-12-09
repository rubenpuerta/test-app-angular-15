import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, Observable, take, tap } from 'rxjs';
import { ApiInfo } from 'src/app/interfaces';
import { ApiState, selectData } from 'src/app/store/api.reducer';

import { selectIsLoading } from 'src/app/store/ui.reducer';
import * as NavigationActions from '../../store/navigation.actions';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent {
  // public data$ = stateInjector(selectData).pipe(tap(console.log));
  // public isLoading$ = stateInjector(selectIsLoading);
 
  // private goToNextPage = injectAction(NavigationActions.navigateToNextPage);

  // Using Aliases for Non-Observable Values
  // public test = { data: { name: 'Homer', lastname: 'Simpson' } };

  public data$: Observable<ApiInfo[]>;
  public isLoading$: Observable<boolean>;

  constructor(private store: Store<ApiState>) {
    this.data$ = this.store.select(selectData);
    this.isLoading$ = this.store.select(selectIsLoading);

    // Tracking Different Observable Events 
    // this.isLoading$ = this.store.select(selectIsLoading).pipe(tap(() => { throw new Error("Forced error") }), take(1))
    // this.isLoading$ = this.store.select(selectIsLoading).pipe(take(1))

    // Using Suspense Template
    // this.isLoading$ = this.store.select(selectIsLoading).pipe(delay(3000));
  }

  seeMoreInfo() {
    this.store.dispatch(NavigationActions.navigateToNextPage())
    // this.goToNextPage();
  }
}
