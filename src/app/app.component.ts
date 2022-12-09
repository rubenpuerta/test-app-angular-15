import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApiState } from 'src/app/store/api.reducer';
import { AuthService } from './services/auth.service';
import * as ApiActions from './store/api.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // public auth = inject(AuthService);
  // private loadData = injectAction(ApiActions.loadApiData);

  constructor(public auth: AuthService, private store: Store<ApiState>) { 
    this.store.dispatch(ApiActions.loadData());
  }

  // constructor() {
  //   this.loadData();
  // }
      
  logUser() {
    this.auth.isLogged()
      ? this.auth.logout()
      : this.auth.login();
  }
}

