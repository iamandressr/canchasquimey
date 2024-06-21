import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Importar IonicModule

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
  standalone: true, // Agregar esta línea
  imports: [IonicModule] // Agregar IonicModule a los imports
})
export class HorariosPage implements OnInit {
  canchaSeleccionada: string;
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.canchaSeleccionada = params['cancha'];
    });
  }
}
