import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerVolComponent } from './composer-vol.component';

describe('ComposerVolComponent', () => {
  let component: ComposerVolComponent;
  let fixture: ComponentFixture<ComposerVolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposerVolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
