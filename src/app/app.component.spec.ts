import { NGRX_TESTING_TRANSLATE } from '../testing/ngrx.translate';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [NGRX_TESTING_TRANSLATE, AppComponent]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have a router outlet`, () => {
    const outlet = debugElement.query(By.directive(RouterOutlet));
    expect(outlet).not.toBeNull();
  });
});
