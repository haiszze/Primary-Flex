import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSelect } from './component-select';

describe('ComponentSelect', () => {
  let component: ComponentSelect;
  let fixture: ComponentFixture<ComponentSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
