import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from 'src/app/interfaces';
import { selectUsers, UserState } from 'src/app/store/fake-api.reducer';
import { selectIsLoading } from 'src/app/store/ui.reducer';
import * as NavigationActions from '../../store/navigation.actions';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent {
  public users$: Observable<User[]>;
  public isLoading$: Observable<boolean>;

  constructor(private store: Store<UserState>) { 
    this.users$ = this.store.select(selectUsers);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  seeMoreInfo() {
    this.store.dispatch(NavigationActions.navigateToNextPage())
  }
}
