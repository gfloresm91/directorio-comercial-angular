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
    { nombre: 'Veterinaría Pet\'s Shop' },
    { nombre: 'Restaurant Subterra' },
    { nombre: 'Minería Chifón del Diablo' },
  ];

  constructor() {
  }
}
