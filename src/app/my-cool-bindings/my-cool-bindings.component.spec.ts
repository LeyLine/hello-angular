import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoolBindingsComponent } from './my-cool-bindings.component';

describe('MyCoolBindingsComponent', () => {
  let component: MyCoolBindingsComponent;
  let fixture: ComponentFixture<MyCoolBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCoolBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoolBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
