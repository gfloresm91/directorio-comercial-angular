import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares: any = [
    {
      id: 1,
      plan: 'pagado',
      cercania: 1,
      distancia: 1,
      activo: true,
      nombre: 'Veterinaría Pet\'s Shop',
      descripcion: 'Descripción de ejemplo del negocio'
    },
    {
      id: 2,
      plan: 'gratuito',
      cercania: 2,
      distancia: 5,
      activo: false,
      nombre: 'Restaurant Subterra',
      descripcion: 'Descripción de ejemplo del negocio'
    },
    {
      id: 3,
      plan: 'gratuito',
      cercania: 3,
      distancia: 10,
      activo: true,
      nombre: 'Minería Chifón del Diablo',
      descripcion: 'Descripción de ejemplo del negocio'
    },
  ];

  id = null;
  lugar: any = {};
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params[`id`];
    this.lugar = this.buscarLugar();
  }

  buscarLugar() {
    return this.lugares.find((lugar) => lugar.id.toString() === this.id) || null;
  }
}
