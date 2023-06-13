import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayoutHeaderComponent } from './header.component';

describe('PublicLayoutHeaderComponent', () => {
  let component: PublicLayoutHeaderComponent;
  let fixture: ComponentFixture<PublicLayoutHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PublicLayoutHeaderComponent]
    });
    fixture = TestBed.createComponent(PublicLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
