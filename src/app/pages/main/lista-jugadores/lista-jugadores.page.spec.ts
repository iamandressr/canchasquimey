import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaJugadoresPage } from './lista-jugadores.page';

describe('ListaJugadoresPage', () => {
  let component: ListaJugadoresPage;
  let fixture: ComponentFixture<ListaJugadoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaJugadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
