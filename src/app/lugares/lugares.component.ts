import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'directorio comercial angular';
  // :any is typescript nomenclature
  lugares: any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, activo: true, nombre: 'Veterinaría Pet\'s Shop' },
    { id: 2, plan: 'gratuito', cercania: 2, distancia: 5, activo: false, nombre: 'Restaurant Subterra' },
    { id: 3, plan: 'gratuito', cercania: 3, distancia: 10, activo: true, nombre: 'Minería Chifón del Diablo' },
  ];
  lat = -37.092811;
  lng = -73.163460;

  constructor() {
  }
}
