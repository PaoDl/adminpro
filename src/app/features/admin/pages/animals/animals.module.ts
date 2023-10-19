import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';
import { BtnComponent, TitleCardComponent } from '@shared/components';


@NgModule({
  declarations: [
    AnimalsComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    BtnComponent,
    
  ]
})
export class AnimalsModule {

 }
