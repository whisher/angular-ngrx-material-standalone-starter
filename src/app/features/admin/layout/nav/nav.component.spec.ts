import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AdminLayoutNavComponent } from './nav.component';

describe(AdminLayoutNavComponent.name, () => {
  let fixture: ComponentFixture<AdminLayoutNavComponent>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [provideRouter([{ path: 'home', component: AdminLayoutNavComponent }])]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutNavComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
