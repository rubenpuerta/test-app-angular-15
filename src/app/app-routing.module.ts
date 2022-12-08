import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeContainerComponent } from 'src/app/components/home-container/home-container.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'App - home', component: HomeContainerComponent },
  {
    path: 'more-info',
    title: 'App - More info',
    canActivate: [() => inject(AuthService).isLogged()],
    loadChildren: () => import('./pages/+more-info/more-info.module')
  },
  { path: '**', component: HomeContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
