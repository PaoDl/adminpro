import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiomeRoutingModule } from './biome-routing.module';
import { BiomeComponent } from './biome.component';
import { BtnComponent, InputTextComponent, TitleCardComponent } from '@shared/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoimeFormComponent } from './component/boime-form/biome-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BiomeComponent,
    BoimeFormComponent
  ],
  imports: [
    CommonModule,
    BiomeRoutingModule,
    BtnComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    InputTextComponent,
    TitleCardComponent,
  ]
})
export class BiomeModule { }
