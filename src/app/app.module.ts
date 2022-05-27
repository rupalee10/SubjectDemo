import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { DesignServiceService } from '../design-service.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Comp1Component, Comp2Component, Comp3Component],
  bootstrap: [AppComponent],
  providers: [DesignServiceService],
})
export class AppModule {}
