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
    { activo: true, nombre: 'Veterinaría Pet\'s Shop' },
    { activo: false, nombre: 'Restaurant Subterra' },
    { activo: true, nombre: 'Minería Chifón del Diablo' },
  ];
  lat = -37.092811;
  lng = -73.163460;

  constructor() {
  }
}
