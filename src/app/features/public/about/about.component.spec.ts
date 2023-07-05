import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicAboutComponent } from './about.component';

describe(PublicAboutComponent.name, () => {
  let fixture: ComponentFixture<PublicAboutComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAboutComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
