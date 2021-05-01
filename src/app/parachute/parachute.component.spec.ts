import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParachuteComponent } from './parachute.component';

describe('ParachuteComponent', () => {
  let component: ParachuteComponent;
  let fixture: ComponentFixture<ParachuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParachuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParachuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
