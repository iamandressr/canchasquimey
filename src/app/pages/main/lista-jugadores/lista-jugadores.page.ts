import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.page.html',
  styleUrls: ['./lista-jugadores.page.scss'],
})
export class ListaJugadoresPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const horarioSeleccionado = params['horario'];
      // Aquí puedes realizar las operaciones necesarias con el horarioSeleccionado
    });
  }

}
