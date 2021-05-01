import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationAvionRowComponent } from './administration-avion-row.component';

describe('AdministrationAvionRowComponent', () => {
  let component: AdministrationAvionRowComponent;
  let fixture: ComponentFixture<AdministrationAvionRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationAvionRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationAvionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
