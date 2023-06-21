import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLoginMainComponent } from './main.component';

describe('PublicLoginMainComponent', () => {
  let component: PublicLoginMainComponent;
  let fixture: ComponentFixture<PublicLoginMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PublicLoginMainComponent]
    });
    fixture = TestBed.createComponent(PublicLoginMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
