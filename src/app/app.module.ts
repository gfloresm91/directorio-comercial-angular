import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { environment } from './../environments/environment';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-click.directive';
import { DetalleComponent } from './detalle/detalle.component';
import { Routes, RouterModule } from '@angular/router';
import { LugaresComponent } from './lugares/lugares.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LugaresComponent
  },
  {
    path: 'lugares',
    component: LugaresComponent
  },
  {
    path: 'detalle',
    component: DetalleComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.API_KEY
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
