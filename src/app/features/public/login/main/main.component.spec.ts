import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NGRX_TESTING_TRANSLATE } from '../../../../../testing/ngrx.translate';
import { initialState } from '@domains/settings/store/settings.reducer';
import { PublicLoginMainComponent } from './main.component';

describe(PublicLoginMainComponent.name, () => {
  let fixture: ComponentFixture<PublicLoginMainComponent>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, NGRX_TESTING_TRANSLATE],
      providers: [provideMockStore({ initialState })]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLoginMainComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
