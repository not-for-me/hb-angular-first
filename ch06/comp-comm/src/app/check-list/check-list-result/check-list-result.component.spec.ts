import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListResultComponent } from './check-list-result.component';

describe('CheckListResultComponent', () => {
  let component: CheckListResultComponent;
  let fixture: ComponentFixture<CheckListResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckListResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
