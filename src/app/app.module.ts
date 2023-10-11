import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, HttpClientModule,SpinnerComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
