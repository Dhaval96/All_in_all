import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfWorkerComponent } from './list-of-worker.component';

describe('ListOfWorkerComponent', () => {
  let component: ListOfWorkerComponent;
  let fixture: ComponentFixture<ListOfWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
