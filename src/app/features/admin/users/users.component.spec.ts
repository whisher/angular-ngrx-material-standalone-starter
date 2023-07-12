import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUsersComponent } from './users.component';

describe(AdminUsersComponent.name, () => {
  let fixture: ComponentFixture<AdminUsersComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
