import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { MappingModule } from '@ahk-freiburg/hwrm-mapping';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    MappingModule.forRoot({
      assetPath: './assets/esri'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
