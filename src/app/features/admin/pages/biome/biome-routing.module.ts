import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiomeComponent } from './biome.component';

const routes: Routes = [ { path: '', component: BiomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiomeRoutingModule { }
