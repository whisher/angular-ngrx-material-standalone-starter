import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';

describe(NotFoundComponent.name, () => {
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
