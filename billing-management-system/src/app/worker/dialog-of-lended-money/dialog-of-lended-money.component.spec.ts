import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOfLendedMoneyComponent } from './dialog-of-lended-money.component';

describe('DialogOfLendedMoneyComponent', () => {
  let component: DialogOfLendedMoneyComponent;
  let fixture: ComponentFixture<DialogOfLendedMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOfLendedMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOfLendedMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
