import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OutcomeDetailPage } from './outcome-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OutcomeDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OutcomeDetailPage]
})
export class OutcomeDetailPageModule {}
