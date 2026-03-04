import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMultiselect } from './component-multiselect';

describe('ComponentMultiselect', () => {
  let component: ComponentMultiselect;
  let fixture: ComponentFixture<ComponentMultiselect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentMultiselect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentMultiselect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
