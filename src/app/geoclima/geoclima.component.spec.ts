import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoclimaComponent } from './geoclima.component';

describe('GeoclimaComponent', () => {
  let component: GeoclimaComponent;
  let fixture: ComponentFixture<GeoclimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoclimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoclimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
