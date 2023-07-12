import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NGRX_TESTING_TRANSLATE } from '../../../testing/ngrx.translate';
import { NotFoundComponent } from './not-found.component';

describe(NotFoundComponent.name, () => {
  let fixture: ComponentFixture<NotFoundComponent>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [NGRX_TESTING_TRANSLATE],
      providers: [provideRouter([{ path: 'home', component: NotFoundComponent }])]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
