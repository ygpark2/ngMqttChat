/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar.component';

xdescribe('Component: Navbar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [
        ToolbarComponent,
      ],
    });
  });

  it('should create the Navbar component', async(() => {
    let fixture = TestBed.createComponent(ToolbarComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

});
