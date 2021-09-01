import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'lobo-guerreiro',
    loadChildren: () => import('./filmes/lobo-guerreiro/lobo-guerreiro.module').then( m => m.LoboGuerreiroPageModule)
  },
  {
    path: 'pagando-bem',
    loadChildren: () => import('./filmes/pagando-bem/pagando-bem.module').then( m => m.PagandoBemPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
