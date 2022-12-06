import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LetModule } from '@ngrx/component';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from 'src/app/shared';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from '../environments/environment';
import { FakeApiEffects } from 'src/app/store/fake-api.effects';
import { HomeContainerComponent } from 'src/app/components/home-container/home-container.component';
import { ROOT_REDUCERS } from 'src/app/store/app.reducer';
import { UIEffects } from 'src/app/store/ui.effects';
import { NavigationEffects } from 'src/app/store/navigation.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    LetModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([FakeApiEffects, UIEffects, NavigationEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
