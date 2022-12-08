import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  public data$: Observable<ApiInfo[]>;
  public isLoading$: Observable<boolean>;

  constructor(private store: Store<ApiState>) { 
    this.data$ = this.store.select(selectData);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  seeMoreInfo() {
    this.store.dispatch(NavigationActions.navigateToNextPage())
  }
}
