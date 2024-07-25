import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DateTimeService } from '../../../services/date-time.service';
import { DatabaseService } from '../../../services/database.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {
  currentDateTime: string;
  horariosDisponibles: any[] = [];
  canchaId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dateTimeService: DateTimeService,
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.currentDateTime = this.dateTimeService.getCurrentDateTime();
    this.canchaId = this.route.snapshot.paramMap.get('id');
    this.cargarHorarios();
  }

  cargarHorarios() {
    this.databaseService.getHorarios().subscribe(
      (data) => {
        this.horariosDisponibles = data;
      },
      (error) => {
        console.error('Error al cargar horarios:', error);
      }
    );
  }

  irAHorarios(canchaId: string) {
    this.router.navigate(['/main/horarios', canchaId]);
  }

  irARegistroPersonas(horarioId: string) {
    this.router.navigate(['/main/registro-personas', horarioId]);
  }
  
}
