import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Jugador } from 'src/app/models/jugador.model';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {

  reservaId: string = ''; // Inicializar reservaId con un valor vacío
  nuevoJugador: string = '';
  jugadores: Jugador[] = [];
  horarioSeleccionado: string;

  constructor(private router: Router, private route: ActivatedRoute, private firebaseSvc: FirebaseService, ) {}

  ngOnInit() {
    

  
  }

  
  

  
}
