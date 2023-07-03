import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { PublicLayoutMainComponent } from './main.component';
import { initialState } from '@domains/settings/store/settings.reducer';
describe(PublicLayoutMainComponent.name, () => {
  let fixture: ComponentFixture<PublicLayoutMainComponent>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      providers: [
        provideRouter([{ path: 'home', component: PublicLayoutMainComponent }]),
        provideMockStore({ initialState })
      ]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutMainComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
