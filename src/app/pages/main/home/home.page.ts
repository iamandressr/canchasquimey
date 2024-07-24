import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DatabaseService } from 'src/app/services/database.service';
import { UtilsService } from 'src/app/services/utils.service';
import { DateTimeService } from 'src/app/services/date-time.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currentDateTime: string;
  canchas: any[] = [];

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(
    private router: Router,
    private databaseService: DatabaseService,
    private dateTimeService: DateTimeService
  ) {}

  ngOnInit() {
    this.updateDateTime();
    this.loadCanchas();
  }

  updateDateTime() {
    this.currentDateTime = this.dateTimeService.getCurrentDateTime();
  }

  loadCanchas() {
    this.databaseService.getCanchas().subscribe(
      (data) => {
        this.canchas = data;
      },
      (error) => {
        console.error('Error al cargar las canchas:', error);
      }
    );
  }

  verHorarios(canchaId: number) {
    this.router.navigate(['/horarios', canchaId]);
  }

  signOut() {
    this.firebaseSvc.signOut();
  }
}
