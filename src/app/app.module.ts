import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { environment } from './../environments/environment';
import { ResaltarDirective } from './directives/resaltar.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.API_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
