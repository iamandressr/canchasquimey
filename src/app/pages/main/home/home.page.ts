import { Component, OnInit, inject, Injectable } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Jugador } from 'src/app/models/jugador.model';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  reservaId: string;
  nuevoJugador: string = '';
  jugadores: Jugador[] = [];
  canchas = [
    'Cancha 1',
    'Cancha 2',
    'Cancha 3',
    'Cancha 4',
    'Cancha 6',
    'Cancha 7',
    'Cancha 8',
    'Cancha 9',
  ];

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.reservaId = params['reservaId'];

      this.firebaseSvc.getJugadoresReserva(this.reservaId).subscribe(jugadores => {
        this.jugadores = jugadores;
      });
    });
  }

  agregarJugador() {
    if (this.nuevoJugador.trim()) {
      const jugador: Jugador = {
        nombre: this.nuevoJugador,
        asistio: false
      };
      this.firebaseSvc.addJugadorReserva(this.reservaId, jugador).then(() => {
        this.nuevoJugador = '';
      });
    }
  }

  marcarAsistencia(jugador: Jugador, asistio: boolean) {
    this.firebaseSvc.updateJugadorReserva(this.reservaId, jugador.id, { asistio });
  }

  eliminarJugador(jugador: Jugador) {
    this.firebaseSvc.eliminarJugadorReserva(this.reservaId, jugador.id)
      .then(() => {
        console.log('Jugador eliminado correctamente');
      })
      .catch((error) => {
        console.error('Error al eliminar jugador:', error);
      });
  }

  irAHorarios(cancha: string) {
    this.router.navigate(['/main/horarios', cancha]);
  }



  //cerrar sesion
  signOut(){
    this.firebaseSvc.signOut();
  }
}
