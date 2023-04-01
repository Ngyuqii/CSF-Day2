import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { ProgramComponent } from './components/program/program.component';

@NgModule({
  declarations: [
    AppComponent,
    RsvpComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
