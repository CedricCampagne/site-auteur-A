import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMessages } from './ui-messages';

describe('UiMessages', () => {
  let component: UiMessages;
  let fixture: ComponentFixture<UiMessages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiMessages],
    }).compileComponents();

    fixture = TestBed.createComponent(UiMessages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
