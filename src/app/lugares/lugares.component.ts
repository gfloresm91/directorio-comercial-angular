import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'directorio comercial angular';
  // :any is typescript nomenclature
  lugares: any = [
    { plan: 'pagado', cercania: 1, distancia: 1, activo: true, nombre: 'Veterinaría Pet\'s Shop' },
    { plan: 'gratuito', cercania: 2, distancia: 5, activo: false, nombre: 'Restaurant Subterra' },
    { plan: 'gratuito', cercania: 3, distancia: 10, activo: true, nombre: 'Minería Chifón del Diablo' },
  ];
  lat = -37.092811;
  lng = -73.163460;

  constructor() {
  }
}
