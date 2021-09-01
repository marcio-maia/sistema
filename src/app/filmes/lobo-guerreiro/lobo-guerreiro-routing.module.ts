import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoboGuerreiroPage } from './lobo-guerreiro.page';

const routes: Routes = [
  {
    path: '',
    component: LoboGuerreiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoboGuerreiroPageRoutingModule {}
