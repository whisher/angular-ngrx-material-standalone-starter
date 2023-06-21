import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLoginFormComponent } from './form.component';

describe('PublicLoginFormComponent', () => {
  let component: PublicLoginFormComponent;
  let fixture: ComponentFixture<PublicLoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PublicLoginFormComponent]
    });
    fixture = TestBed.createComponent(PublicLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
