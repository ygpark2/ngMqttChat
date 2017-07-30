import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputActionComponent } from './input-action.component';

describe('ChatActionComponent', () => {
  let component: InputActionComponent;
  let fixture: ComponentFixture<InputActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
