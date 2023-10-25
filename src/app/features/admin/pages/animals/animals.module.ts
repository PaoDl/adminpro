import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';
import { BtnComponent, InputTextComponent, TitleCardComponent,  } from '@shared/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimalsFormComponent } from './component/animals-form';



@NgModule({
  declarations: [
    AnimalsComponent,
    AnimalsFormComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    BtnComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    InputTextComponent,
    TitleCardComponent,
  ]
})
export class AnimalsModule {

 }
