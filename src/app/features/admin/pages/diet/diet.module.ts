import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietRoutingModule } from './diet-routing.module';
import { DietComponent } from './diet.component';
import { BtnComponent } from '@shared/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    DietComponent,
  ],
  imports: [
    CommonModule,
    DietRoutingModule,
    BtnComponent,
    FontAwesomeModule,
  ]
})
export class DietModule { }
