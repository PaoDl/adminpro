import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './components';
import { BtnComponent, EyeBtnComponent } from '@shared/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent,
    
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    BtnComponent,
    EyeBtnComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
