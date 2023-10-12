import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { tokenInterceptor } from './core';


@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, HttpClientModule,SpinnerComponent],
  providers: [provideHttpClient(withInterceptors([tokenInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
