import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Fecha_ActualComponent } from './fecha_actual/fecha_actual.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    Fecha_ActualComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
