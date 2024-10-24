import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/*
  Angular module help us organize our application and
  resolves the template (view) resolution environment
  by declaring the app.component so that the compiler
  can find it
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// We identify the class as Angular module by attaching the @NgModule decorator
//The metadata for AppModule class are: declarations, imports, and bootstrap
//properties of the @NgModule decorator
export class AppModule { }
