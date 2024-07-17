import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeromatDialogComponent } from './aeromat-dialog.component';

describe('AeromatDialogComponent', () => {
  let component: AeromatDialogComponent;
  let fixture: ComponentFixture<AeromatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeromatDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeromatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
