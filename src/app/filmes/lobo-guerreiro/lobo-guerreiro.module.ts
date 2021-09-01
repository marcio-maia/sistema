import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoboGuerreiroPageRoutingModule } from './lobo-guerreiro-routing.module';

import { LoboGuerreiroPage } from './lobo-guerreiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoboGuerreiroPageRoutingModule
  ],
  declarations: [LoboGuerreiroPage]
})
export class LoboGuerreiroPageModule {}
