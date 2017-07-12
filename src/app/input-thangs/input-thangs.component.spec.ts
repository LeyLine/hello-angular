import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputThangsComponent } from './input-thangs.component';

describe('InputThangsComponent', () => {
  let component: InputThangsComponent;
  let fixture: ComponentFixture<InputThangsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputThangsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputThangsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
