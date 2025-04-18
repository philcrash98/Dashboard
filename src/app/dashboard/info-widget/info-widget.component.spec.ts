import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWidgetComponent } from './info-widget.component';

describe('InfoWidgetComponent', () => {
  let component: InfoWidgetComponent;
  let fixture: ComponentFixture<InfoWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
