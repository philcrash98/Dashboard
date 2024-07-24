import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafDialogComponent } from './leaf-dialog.component';

describe('LeafDialogComponent', () => {
  let component: LeafDialogComponent;
  let fixture: ComponentFixture<LeafDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeafDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeafDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
