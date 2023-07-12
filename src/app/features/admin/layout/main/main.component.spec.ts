import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { UserAccountResponseDto, UserRoleDto } from '@api/models';
import { initialState } from '@domains/account/store/account.reducer';
import { AdminLayoutMainComponent } from './main.component';

const account$: Observable<UserAccountResponseDto> = of({
  id: 'abc',
  username: 'Whisher',
  email: 'io@io.io',
  role: UserRoleDto.admin
});

describe(AdminLayoutMainComponent.name, () => {
  let component: AdminLayoutMainComponent;
  let fixture: ComponentFixture<AdminLayoutMainComponent>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      providers: [
        provideRouter([{ path: 'home', component: AdminLayoutMainComponent }]),
        provideMockStore({ initialState })
      ]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutMainComponent);
    component = fixture.debugElement.componentInstance;
    component.account$ = account$;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
