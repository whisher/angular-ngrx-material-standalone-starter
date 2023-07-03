import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { PublicLayoutHeaderComponent } from './header.component';
import { initialState } from '@domains/settings/store/settings.reducer';
describe(PublicLayoutHeaderComponent.name, () => {
  let fixture: ComponentFixture<PublicLayoutHeaderComponent>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: 'home', component: PublicLayoutHeaderComponent }]),
        provideMockStore({ initialState })
      ]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutHeaderComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
