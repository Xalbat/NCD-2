import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionnageComponent } from './avionnage.component';

describe('AvionnageComponent', () => {
  let component: AvionnageComponent;
  let fixture: ComponentFixture<AvionnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvionnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvionnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
