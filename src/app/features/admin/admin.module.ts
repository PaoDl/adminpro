import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BiomeComponent } from './pages/biome/biome.component';

import { SpeciesComponent } from './pages/species/species.component';
import { DietComponent } from './pages/diet/diet.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }