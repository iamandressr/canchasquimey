import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Importar IonicModule
import { SharedModule } from '../../../shared/shared.module'; 
import { Cancha } from 'src/app/models/cancha.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
  standalone: true, // Agregar esta línea
  imports: [IonicModule, SharedModule, CommonModule] // Agregar IonicModule a los imports
})
export class HorariosPage implements OnInit {
  canchaSeleccionada: Cancha;
  horarios: string[] = [
    '10:30-11:30',
    '11:30-12:30',
    '12:30-13:30',
    '13:30-14:30',
    '14:30-15:30',
    '15:30-16:30',
    '16:30-17:30',
    '17:30-18:30',
    '18:30-19:30',
    '19:30-20:30',
    '20:30-21:30',
    '21:30-22:30',
    '22:30-23:30'
  ];

  horariosDisponibles: { [canchaId: string]: string[] } = {
    'cancha1': this.horarios,
    'cancha2': this.horarios,
    'cancha3': this.horarios,
    'cancha4': this.horarios,
    'cancha6': this.horarios,
    'cancha7': this.horarios,
    'cancha8': this.horarios,
    'cancha9': this.horarios,
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const canchaId = params['cancha'];
      // Aquí puedes obtener los detalles de la cancha seleccionada desde tu servicio Firebase
      this.canchaSeleccionada = { id: canchaId, nombre: canchaId, ubicacion: 'Ubicación de la cancha' };
    });
  }
}
