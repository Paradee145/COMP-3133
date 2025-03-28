import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; // ✅ Must be added

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent // ✅ Must be declared here
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


