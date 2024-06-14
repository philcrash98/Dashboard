import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerWidgetComponent } from './power-widget.component';

describe('PowerWidgetComponent', () => {
  let component: PowerWidgetComponent;
  let fixture: ComponentFixture<PowerWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
