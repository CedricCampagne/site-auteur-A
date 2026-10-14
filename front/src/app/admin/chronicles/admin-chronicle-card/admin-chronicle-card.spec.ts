import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChronicleCard } from './admin-chronicle-card';

describe('AdminChronicleCard', () => {
  let component: AdminChronicleCard;
  let fixture: ComponentFixture<AdminChronicleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminChronicleCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminChronicleCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
