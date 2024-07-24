import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost:3000/api'; // Ajusta esta URL según tu configuración de backend

  constructor(private http: HttpClient) {}

  getCanchas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/canchas`);
  }

  // Puedes agregar más métodos según necesites, por ejemplo:
  getHorarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/horarios`);
  }

  createReserva(reservaData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reservas`, reservaData);
  }
}
