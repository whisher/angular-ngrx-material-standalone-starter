import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PublicLayoutNavComponent } from './nav.component';

describe(PublicLayoutNavComponent.name, () => {
  let fixture: ComponentFixture<PublicLayoutNavComponent>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [provideRouter([{ path: 'home', component: PublicLayoutNavComponent }])]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutNavComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
