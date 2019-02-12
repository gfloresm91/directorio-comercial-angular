import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  constructor(private afDB: AngularFireDatabase, private http: HttpClient) { }

  public getLugares() {
    return this.afDB.list('lugares/');
  }

  public getLugar(id) {
    return this.afDB.object(`lugares/${id}`);
  }

  public buscarLugar(id) {
    return this.lugares.find((lugar) => lugar.id.toString() === id) || null;
  }

  public guardarLugar(lugar) {
    this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
  }

  public editarLugar(lugar) {
    this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
  }

  public obtenerGeoData(direccion) {
    return this.http.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=${environment.MAPS_API_KEY}`
      );
  }
}
