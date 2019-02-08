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
    this.lugares = lugaresService.getLugares();
  }
}
