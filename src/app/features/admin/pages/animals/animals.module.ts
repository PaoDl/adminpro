import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';
import { BtnComponent,  } from '@shared/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AnimalsComponent,
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    BtnComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class AnimalsModule {

 }
