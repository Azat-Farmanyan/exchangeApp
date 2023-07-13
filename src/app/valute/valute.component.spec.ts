import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuteComponent } from './valute.component';

describe('ValuteComponent', () => {
  let component: ValuteComponent;
  let fixture: ComponentFixture<ValuteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValuteComponent]
    });
    fixture = TestBed.createComponent(ValuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
