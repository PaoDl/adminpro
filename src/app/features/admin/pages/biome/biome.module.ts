import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiomeRoutingModule } from './biome-routing.module';
import { BiomeComponent } from './biome.component';
import { TitleCardComponent } from '@shared/components';


@NgModule({
  declarations: [BiomeComponent],
  imports: [
    CommonModule,
    BiomeRoutingModule,
    TitleCardComponent
  ]
})
export class BiomeModule { }
