import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiomeRoutingModule } from './biome-routing.module';
import { BiomeComponent } from './biome.component';
import { BtnComponent, TitleCardComponent } from '@shared/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [BiomeComponent],
  imports: [
    CommonModule,
    BiomeRoutingModule,
    BtnComponent,
    FontAwesomeModule,
  ]
})
export class BiomeModule { }
