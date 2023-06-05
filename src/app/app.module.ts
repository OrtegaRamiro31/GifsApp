import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { GiftsModule } from './gifts/gifts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GiftsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
