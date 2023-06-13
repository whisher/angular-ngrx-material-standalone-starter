import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayoutNavComponent } from './nav.component';

describe('PublicLayoutNavComponent', () => {
  let component: PublicLayoutNavComponent;
  let fixture: ComponentFixture<PublicLayoutNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PublicLayoutNavComponent]
    });
    fixture = TestBed.createComponent(PublicLayoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
