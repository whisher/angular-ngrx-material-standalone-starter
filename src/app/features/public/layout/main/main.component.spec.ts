import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayoutMainComponent } from './main.component';

describe('PublicLayoutMainComponent', () => {
  let component: PublicLayoutMainComponent;
  let fixture: ComponentFixture<PublicLayoutMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PublicLayoutMainComponent]
    });
    fixture = TestBed.createComponent(PublicLayoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
