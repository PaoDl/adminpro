import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietRoutingModule } from './diet-routing.module';
import { DietComponent } from './diet.component';
import { BtnComponent, InputTextComponent, TitleCardComponent } from '@shared/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DietFormComponent } from './component/diet-form/diet-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DietComponent,
    DietFormComponent,
  ],
  imports: [
    CommonModule,
    DietRoutingModule,
    BtnComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    InputTextComponent,
    TitleCardComponent,
  ]
})
export class DietModule { }
