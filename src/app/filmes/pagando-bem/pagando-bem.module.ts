import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagandoBemPageRoutingModule } from './pagando-bem-routing.module';

import { PagandoBemPage } from './pagando-bem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagandoBemPageRoutingModule
  ],
  declarations: [PagandoBemPage]
})
export class PagandoBemPageModule {}
