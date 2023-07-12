import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NGRX_TESTING_TRANSLATE } from '../../../../testing/ngrx.translate';
import { AdminDashboardComponent } from './dashboard.component';

describe(AdminDashboardComponent.name, () => {
  let fixture: ComponentFixture<AdminDashboardComponent>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NGRX_TESTING_TRANSLATE]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
