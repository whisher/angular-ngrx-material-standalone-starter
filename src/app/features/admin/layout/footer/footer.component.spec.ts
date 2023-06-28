import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutFooterComponent } from './footer.component';

describe('AdminLayoutFooterComponent', () => {
  let component: AdminLayoutFooterComponent;
  let fixture: ComponentFixture<AdminLayoutFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminLayoutFooterComponent]
    });
    fixture = TestBed.createComponent(AdminLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
