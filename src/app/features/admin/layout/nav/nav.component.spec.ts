import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutNavComponent } from './nav.component';

describe('AdminLayoutNavComponent', () => {
  let component: AdminLayoutNavComponent;
  let fixture: ComponentFixture<AdminLayoutNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminLayoutNavComponent]
    });
    fixture = TestBed.createComponent(AdminLayoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
