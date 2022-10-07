import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaListarComponenteComponent } from './marca-listar-componente.component';

describe('MarcaListarComponenteComponent', () => {
  let component: MarcaListarComponenteComponent;
  let fixture: ComponentFixture<MarcaListarComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaListarComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaListarComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
