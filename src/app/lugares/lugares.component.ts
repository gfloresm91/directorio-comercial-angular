import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimado', [
      state('inicial', style({
        opacity: 0,
        backgroundColor: 'green',
        transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final', animate(1000)),
      transition('final => inicial', animate(500)),
    ])
  ]
})
export class LugaresComponent {
  title = 'directorio comercial angular';
  state = 'final';

  lat = -37.092811;
  lng = -73.163460;
  lugares = null;

  animar() {
    this.state = (this.state === 'final' ? 'inicial' : 'final');
  }

  animacionInicia(evento) {
    console.log('Evento inicia: ');
    console.log(evento);
  }

  animacionTermina(evento) {
    console.log('Evento termina: ');
    console.log(evento);
  }

  constructor(private lugaresService: LugaresService) {
    lugaresService.getLugares()
      .subscribe((lugares) => {
        this.lugares = lugares;
        this.lugares = Object.keys(this.lugares).map((key) => {
          return this.lugares[key];
        });
      }, (error) => {
        console.log(error);
        alert(`En estos momentos tenemos problemas. Error: ${error.statusText}`);
      });
  }
}
