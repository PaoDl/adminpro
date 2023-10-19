import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { TitleCardComponent } from '@shared/components';
import { SpeciesComponent } from './species.component';


@NgModule({
  declarations: [
  SpeciesComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    TitleCardComponent,
  ]
})
export class SpeciesModule { }
