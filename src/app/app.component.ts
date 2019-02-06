import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directorio comercial angular';
  // :any is typescript nomenclature
  lugares: any = [
    { cercania: 1, distancia: 1, activo: true, nombre: 'Veterinaría Pet\'s Shop' },
    { cercania: 2, distancia: 5, activo: false, nombre: 'Restaurant Subterra' },
    { cercania: 3, distancia: 10, activo: true, nombre: 'Minería Chifón del Diablo' },
  ];
  lat = -37.092811;
  lng = -73.163460;

  constructor() {
  }
}
