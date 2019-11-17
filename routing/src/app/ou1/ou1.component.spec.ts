import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ou1Component } from './ou1.component';

describe('Ou1Component', () => {
  let component: Ou1Component;
  let fixture: ComponentFixture<Ou1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ou1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ou1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
