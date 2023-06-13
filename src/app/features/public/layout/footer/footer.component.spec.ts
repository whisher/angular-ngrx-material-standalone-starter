import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayoutFooterComponent } from './footer.component';

describe('PublicLayoutFooterComponent', () => {
  let component: PublicLayoutFooterComponent;
  let fixture: ComponentFixture<PublicLayoutFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PublicLayoutFooterComponent]
    });
    fixture = TestBed.createComponent(PublicLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
