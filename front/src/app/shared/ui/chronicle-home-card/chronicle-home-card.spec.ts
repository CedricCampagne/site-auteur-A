import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronicleHomeCard } from './chronicle-home-card';

describe('ChronicleHomeCard', () => {
  let component: ChronicleHomeCard;
  let fixture: ComponentFixture<ChronicleHomeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronicleHomeCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ChronicleHomeCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
