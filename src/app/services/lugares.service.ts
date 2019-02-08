import { Injectable } from '@angular/core';

@Injectable()
export class LugaresService {
  // :any is typescript nomenclature
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

  public getLugares() {
    return this.lugares;
  }

  public buscarLugar(id) {
    return this.lugares.find((lugar) => lugar.id.toString() === id) || null;
  }

  constructor() { }
}