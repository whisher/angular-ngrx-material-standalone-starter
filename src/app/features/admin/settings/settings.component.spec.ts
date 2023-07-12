import { NGRX_TESTING_TRANSLATE } from '../../../../testing/ngrx.translate';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '@domains/settings/store/settings.reducer';
import { AdminSettingsComponent } from './settings.component';

describe(AdminSettingsComponent.name, () => {
  let fixture: ComponentFixture<AdminSettingsComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [NGRX_TESTING_TRANSLATE],
      providers: [provideMockStore({ initialState })]
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingsComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
