import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   //added FormsModule or two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
