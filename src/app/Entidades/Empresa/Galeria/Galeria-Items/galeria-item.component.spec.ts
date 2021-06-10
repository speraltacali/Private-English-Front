import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaItemComponent } from './galeria-item.component';

describe('GaleriaItemComponent', () => {
  let component: GaleriaItemComponent;
  let fixture: ComponentFixture<GaleriaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
