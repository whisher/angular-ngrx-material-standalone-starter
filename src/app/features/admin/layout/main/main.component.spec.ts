import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutMainComponent } from './main.component';

describe('AdminLayoutMainComponent', () => {
  let component: AdminLayoutMainComponent;
  let fixture: ComponentFixture<AdminLayoutMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminLayoutMainComponent]
    });
    fixture = TestBed.createComponent(AdminLayoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
