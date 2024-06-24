import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DateTimeService } from '../../../services/date-time.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {

  currentDateTime: string;

  horariosDisponibles: string[] = [
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
    '22:30-23:30',
  ];

  constructor(private router: Router, private route: ActivatedRoute, private dateTimeService: DateTimeService) { }

  irAHorarios(canchaId: string) {
    this.router.navigate(['/main/horarios', canchaId]);
  }

  ngOnInit() {

    this.updateDateTime();

    this.route.params.subscribe(params => {
      const canchaId = params['canchaId'];
      this.canchaSeleccionada = { id: canchaId, nombre: `Cancha ${canchaId}` };
    })
  }

  updateDateTime() {
    this.currentDateTime = this.dateTimeService.getCurrentDateTime();
  }

  nombreReservador: { [horario: string]: string } = {};
  canchaSeleccionada: { id: string; nombre: string; };
  nombresAsignados: { [horario: string]: string } = {};
  nombreAAsignar: string = '';
  horarioSeleccionado: string = '';
  


  seleccionarHorario(horario: string) {
    const nombreReservador = this.nombreReservador[horario];
    if (nombreReservador) {
      this.nombreReservador[horario] = nombreReservador;
    }
  }

  asignarNombreReservador(horario: string) {
    const nombreReservador = this.nombreReservador[horario];
    if (nombreReservador) {
      this.nombresAsignados[horario] = nombreReservador;
      console.log('Nombre asignado al horario:', horario, nombreReservador);
    }
  }
  
  asignarNombre(horario: string) {
    if (this.nombreAAsignar.trim()) {
      this.nombresAsignados[horario] = this.nombreAAsignar;
      this.nombreAAsignar = ''; // Limpia el input después de asignar el nombre
    }
  }

}
