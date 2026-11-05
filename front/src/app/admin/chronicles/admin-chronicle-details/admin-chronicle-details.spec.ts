import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChronicleDetails } from './admin-chronicle-details';

describe('AdminChronicleDetails', () => {
  let component: AdminChronicleDetails;
  let fixture: ComponentFixture<AdminChronicleDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminChronicleDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminChronicleDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
