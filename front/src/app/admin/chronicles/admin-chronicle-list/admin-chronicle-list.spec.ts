import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChronicleList } from './admin-chronicle-list';

describe('AdminChronicleList', () => {
  let component: AdminChronicleList;
  let fixture: ComponentFixture<AdminChronicleList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminChronicleList],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminChronicleList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
