
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreInfoComponent } from 'src/app/pages/+more-info/more-info/more-info.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MoreInfoComponent
  }
];

@NgModule({
  declarations: [MoreInfoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [MoreInfoComponent]
})
export default class MoreInfoModule {}