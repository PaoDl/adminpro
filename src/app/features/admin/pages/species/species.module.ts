import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { BtnComponent, InputTextComponent, TitleCardComponent } from '@shared/components';
import { SpeciesComponent } from './species.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpeciesFormComponent } from './componet/species-form/species-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  SpeciesComponent,
  SpeciesFormComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    BtnComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    InputTextComponent,
    TitleCardComponent,
  ]
})
export class SpeciesModule { }
