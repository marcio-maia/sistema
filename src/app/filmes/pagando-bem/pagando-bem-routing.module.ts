import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagandoBemPage } from './pagando-bem.page';

const routes: Routes = [
  {
    path: '',
    component: PagandoBemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagandoBemPageRoutingModule {}
