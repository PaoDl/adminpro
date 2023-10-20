import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { BtnComponent, TitleCardComponent } from '@shared/components';
import { SpeciesComponent } from './species.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
  SpeciesComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    BtnComponent,
    FontAwesomeModule
  ]
})
export class SpeciesModule { }
