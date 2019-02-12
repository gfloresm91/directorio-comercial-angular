import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  lugar: any = {};
  results: any[];
  id: any = null;
  latitud: any;
  longitud: any;

  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params[`id`];
    if (this.id !== 'new') {
      this.lugaresService.getLugar(this.id)
      .valueChanges()
      .subscribe((lugar) => {
        this.lugar = lugar;
      });
    }
   }

  guardarLugar() {
    const direccion = this.lugar.calleynumero + ', ' + this.lugar.ciudad + ', ' + this.lugar.pais;
    // Fucking limit of maps API, cuota exceeded
    this.lugaresService.obtenerGeoData(direccion)
    .subscribe((data) => {
      debugger;
      this.results = data[`results`];
      if (this.results.length !== 0) {
        this.lugar.lat = this.results[0].geometry.location.lat;
        this.lugar.lng = this.results[0].geometry.location.lat;
      } else {
        this.lugar.lat = parseFloat(this.latitud);
        this.lugar.lng = parseFloat(this.longitud);
      }


      if (this.id !== 'new') {
        this.lugaresService.editarLugar(this.lugar);
        alert('Negocio editado exitosamente 😉');
      } else {
        this.lugar.id = Date.now();
        this.lugaresService.guardarLugar(this.lugar);

        // TODO: Validate this
        alert('Negocio registrado exitosamente 😉');
      }

      this.lugar = {};
      this.latitud = null;
      this.longitud = null;
    });

  }

  ngOnInit() {
  }

}
