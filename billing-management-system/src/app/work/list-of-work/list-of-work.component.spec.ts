import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfWorkComponent } from './list-of-work.component';

describe('ListOfWorkComponent', () => {
  let component: ListOfWorkComponent;
  let fixture: ComponentFixture<ListOfWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
