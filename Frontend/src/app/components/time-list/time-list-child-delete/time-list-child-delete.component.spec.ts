import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeListChildDeleteComponent } from './time-list-child-delete.component';

describe('TimeListChildDeleteComponent', () => {
  let component: TimeListChildDeleteComponent;
  let fixture: ComponentFixture<TimeListChildDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeListChildDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeListChildDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
