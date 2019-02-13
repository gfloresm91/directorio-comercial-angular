import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'directorio comercial angular';
  lat = -37.092811;
  lng = -73.163460;

  lugares = null;
  constructor(private lugaresService: LugaresService) {
    lugaresService.getLugares()
      .subscribe((lugares) => {
        this.lugares = lugares;
        this.lugares = Object.keys(this.lugares).map((key) => {
          return this.lugares[key];
        });
      }, (error) => {
        console.log(error);
        alert(`En estos momentos tenemos problemas. Error: ${error.statusText}`);
      });
  }
}
