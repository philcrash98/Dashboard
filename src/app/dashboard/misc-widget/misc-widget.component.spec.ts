import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscWidgetComponent } from './misc-widget.component';

describe('MiscWidgetComponent', () => {
  let component: MiscWidgetComponent;
  let fixture: ComponentFixture<MiscWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiscWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
