import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CimateWidgetComponent } from './cimate-widget.component';

describe('CimateWidgetComponent', () => {
  let component: CimateWidgetComponent;
  let fixture: ComponentFixture<CimateWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CimateWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CimateWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
