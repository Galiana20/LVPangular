import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContactoComponent } from './table-contacto.component';

describe('TableContactoComponent', () => {
  let component: TableContactoComponent;
  let fixture: ComponentFixture<TableContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
