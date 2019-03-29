import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntryChangeComponent } from './time-entry-change.component';

describe('TimeEntryChangeComponent', () => {
  let component: TimeEntryChangeComponent;
  let fixture: ComponentFixture<TimeEntryChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeEntryChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEntryChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
