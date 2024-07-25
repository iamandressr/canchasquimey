import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPersonasPage } from './registro-personas.page';

describe('RegistroPersonasPage', () => {
  let component: RegistroPersonasPage;
  let fixture: ComponentFixture<RegistroPersonasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPersonasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
