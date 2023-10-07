import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { TitleCardComponent } from '@shared/components/title-card/title-card.component';
import { ProfileFormComponent } from './component/profile-form/profile-form.component';
import { BtnComponent, InputTextComponent } from '@shared/components';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TitleCardComponent,
    InputTextComponent,
    BtnComponent,
    ReactiveFormsModule,
    
  ]
})
export class ProfileModule { }
