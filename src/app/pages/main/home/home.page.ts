import { Component, OnInit, inject, Injectable } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Jugador } from 'src/app/models/jugador.model';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';
import { DateTimeService } from 'src/app/services/date-time.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  currentDateTime: string;

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

  constructor(private route: ActivatedRoute, private router: Router, private dateTimeService: DateTimeService) {}

  ngOnInit() {

    this.updateDateTime();  
    
  }
  updateDateTime() {
    this.currentDateTime = this.dateTimeService.getCurrentDateTime();
  }

  //cerrar sesion
  signOut(){
    this.firebaseSvc.signOut();
  }
}
