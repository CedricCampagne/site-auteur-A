import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronicleList } from './chronicle-list';

describe('ChronicleList', () => {
  let component: ChronicleList;
  let fixture: ComponentFixture<ChronicleList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronicleList],
    }).compileComponents();

    fixture = TestBed.createComponent(ChronicleList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
