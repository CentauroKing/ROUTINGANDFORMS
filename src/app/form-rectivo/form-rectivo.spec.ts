import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRectivo } from './form-rectivo';

describe('FormRectivo', () => {
  let component: FormRectivo;
  let fixture: ComponentFixture<FormRectivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRectivo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRectivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
