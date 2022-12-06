import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from './services/auth.service';
import { UserState } from './store/fake-api.reducer';
import * as FakeApiActions from '../app/store/fake-api.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService, private store: Store<UserState>) { 
    this.store.dispatch(FakeApiActions.loadData());
  }
  
  logUser() {
    this.auth.isLogged()
      ? this.auth.logout()
      : this.auth.login();
  }
}
