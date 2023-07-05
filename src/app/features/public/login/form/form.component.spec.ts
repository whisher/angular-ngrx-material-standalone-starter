import { NGRX_TESTING_TRANSLATE } from '../../../../../testing/ngrx.translate';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PublicLoginFormComponent } from './form.component';

describe(PublicLoginFormComponent.name, () => {
  let fixture: ComponentFixture<PublicLoginFormComponent>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [NGRX_TESTING_TRANSLATE, NoopAnimationsModule]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLoginFormComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
