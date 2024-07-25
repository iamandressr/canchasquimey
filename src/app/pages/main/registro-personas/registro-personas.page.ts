import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../../services/database.service';

@Component({
  selector: 'app-registro-personas',
  templateUrl: './registro-personas.page.html',
  styleUrls: ['./registro-personas.page.scss'],
})
export class RegistroPersonasPage implements OnInit {
  horarioId: string;
  horarioSeleccionado: any;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.horarioId = params.get('id');
      this.cargarDetallesHorario();
    });
  }

  cargarDetallesHorario() {
    this.databaseService.getHorarios().subscribe(
      horarios => {
        this.horarioSeleccionado = horarios.find(h => h.id === parseInt(this.horarioId));
      }
    );
  }
}
