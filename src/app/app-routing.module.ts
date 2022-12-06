import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeContainerComponent } from 'src/app/components/home-container/home-container.component';
import { MoreInfoGuardGuard } from 'src/app/guard/more-info-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'User app - home', component: HomeContainerComponent },
  {
    path: 'more-info',
    title: 'User app - More info',
    canActivate: [MoreInfoGuardGuard],
    loadChildren: () => import('./pages/+more-info/more-info.module').then((m) => m.MoreInfoModule)
  },
  { path: '**', component: HomeContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MoreInfoGuardGuard]
})
export class AppRoutingModule { }
