import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutHeaderComponent } from './header.component';

describe('AdminLayoutHeaderComponent', () => {
  let component: AdminLayoutHeaderComponent;
  let fixture: ComponentFixture<AdminLayoutHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminLayoutHeaderComponent]
    });
    fixture = TestBed.createComponent(AdminLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
