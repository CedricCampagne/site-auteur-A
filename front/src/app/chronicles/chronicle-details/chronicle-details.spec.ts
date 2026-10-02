import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronicleDetails } from './chronicle-details';

describe('ChronicleDetails', () => {
  let component: ChronicleDetails;
  let fixture: ComponentFixture<ChronicleDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronicleDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ChronicleDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
