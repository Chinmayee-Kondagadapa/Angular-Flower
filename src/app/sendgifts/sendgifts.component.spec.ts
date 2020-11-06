import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendgiftsComponent } from './sendgifts.component';

describe('SendgiftsComponent', () => {
  let component: SendgiftsComponent;
  let fixture: ComponentFixture<SendgiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendgiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendgiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
