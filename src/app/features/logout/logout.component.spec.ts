import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { initialState } from '@domains/auth/store/auth.reducer';
import { LogoutComponent } from './logout.component';

describe(LogoutComponent.name, () => {
  let fixture: ComponentFixture<LogoutComponent>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
