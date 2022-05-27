import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { HelloComponent } from '../hello.component';
import { Comp1Component } from '../Comp1.Component';
import { Comp2Component } from '../Comp2.Component';
import { Comp3Component } from '../Comp3.Component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    //HelloComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
