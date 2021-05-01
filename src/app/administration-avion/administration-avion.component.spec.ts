import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationAvionComponent } from './administration-avion.component';

describe('AdministrationAvionComponent', () => {
  let component: AdministrationAvionComponent;
  let fixture: ComponentFixture<AdministrationAvionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationAvionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
