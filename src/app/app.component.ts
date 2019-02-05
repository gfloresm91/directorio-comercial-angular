import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directorio comercial angular';
  deshabilitado = true;

  constructor() {
    setTimeout(() => {
      this.deshabilitado = false;
    }, 3000);
  }

  hacerAlgo() {
    alert('Click');
  }
}
