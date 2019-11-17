import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GharComponent } from './ghar.component';

describe('GharComponent', () => {
  let component: GharComponent;
  let fixture: ComponentFixture<GharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
