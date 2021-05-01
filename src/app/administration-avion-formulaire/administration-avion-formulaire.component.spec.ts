import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationAvionFormulaireComponent } from './administration-avion-formulaire.component';

describe('AdministrationAvionFormulaireComponent', () => {
  let component: AdministrationAvionFormulaireComponent;
  let fixture: ComponentFixture<AdministrationAvionFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationAvionFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationAvionFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
