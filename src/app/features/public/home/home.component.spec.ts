import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHomeComponent } from './home.component';

describe('PublicHomeComponent', () => {
  let component: PublicHomeComponent;
  let fixture: ComponentFixture<PublicHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PublicHomeComponent],
    });
    fixture = TestBed.createComponent(PublicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
