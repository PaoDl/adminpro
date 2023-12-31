import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent, EyeBtnComponent } from '@shared/components';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomLabelDirective } from '@shared/directives';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    BtnComponent,
    EyeBtnComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    CustomLabelDirective,
 ]
})
export class LoginModule { }
