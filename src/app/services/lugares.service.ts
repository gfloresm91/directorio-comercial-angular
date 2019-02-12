import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class LugaresService {
  // :any is typescript nomenclature
  lugares: any = [];

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
    // this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
    const headers = new HttpHeaders({'Content-Type' : 'aplication/json'});
    return this.http.post(environment.firebase.databaseURL + '/lugares.json', lugar, { headers }).subscribe();
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
