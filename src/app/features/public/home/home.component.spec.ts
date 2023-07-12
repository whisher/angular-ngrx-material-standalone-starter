import { NGRX_TESTING_TRANSLATE } from '../../../../testing/ngrx.translate';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHomeComponent } from './home.component';

describe(PublicHomeComponent.name, () => {
  let fixture: ComponentFixture<PublicHomeComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [NGRX_TESTING_TRANSLATE]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(PublicHomeComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
