import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerAvionComponent } from './composer-avion.component';

describe('ComposerAvionComponent', () => {
  let component: ComposerAvionComponent;
  let fixture: ComponentFixture<ComposerAvionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposerAvionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
