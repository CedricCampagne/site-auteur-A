import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChronicleCreate } from './admin-chronicle-create';

describe('AdminChronicleCreate', () => {
  let component: AdminChronicleCreate;
  let fixture: ComponentFixture<AdminChronicleCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminChronicleCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminChronicleCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
