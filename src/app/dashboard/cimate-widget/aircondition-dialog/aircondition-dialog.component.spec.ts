import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirconditionDialogComponent } from './aircondition-dialog.component';

describe('AirconditionDialogComponent', () => {
  let component: AirconditionDialogComponent;
  let fixture: ComponentFixture<AirconditionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirconditionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirconditionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
