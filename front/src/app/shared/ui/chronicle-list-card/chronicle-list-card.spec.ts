import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronicleListCard } from './chronicle-list-card';

describe('ChronicleListCard', () => {
  let component: ChronicleListCard;
  let fixture: ComponentFixture<ChronicleListCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronicleListCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ChronicleListCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
