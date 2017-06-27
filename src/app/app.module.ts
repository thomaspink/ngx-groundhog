import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GroundhogModule } from './groundhog/groundhog.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [GroundhogModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
