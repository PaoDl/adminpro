import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { BtnComponent, TitleCardComponent } from '@shared/components';
import { SpeciesComponent } from './species.component';


@NgModule({
  declarations: [
  SpeciesComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    BtnComponent,
  ]
})
export class SpeciesModule { }
