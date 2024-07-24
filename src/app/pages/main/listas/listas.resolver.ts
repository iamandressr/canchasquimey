import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListasResolver implements Resolve<{ reservaId: string, horario: string }> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ reservaId: string, horario: string }> {
    const reservaId = route.paramMap.get('reservaId') || '';
    const horario = route.paramMap.get('horario') || '';
    return new Observable(observer => {
      observer.next({ reservaId, horario });
      observer.complete();
    });
  }
}
