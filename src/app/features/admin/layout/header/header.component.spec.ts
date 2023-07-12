import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { UserAccountResponseDto, UserRoleDto } from '@api/models';
import { initialState } from '@domains/settings/store/settings.reducer';
import { AdminLayoutHeaderComponent } from './header.component';

const account: UserAccountResponseDto = {
  id: 'abc',
  username: 'Whisher',
  email: 'io@io.io',
  role: UserRoleDto.admin
};

describe(AdminLayoutHeaderComponent.name, () => {
  let component: AdminLayoutHeaderComponent;
  let fixture: ComponentFixture<AdminLayoutHeaderComponent>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: 'home', component: AdminLayoutHeaderComponent }]),
        provideMockStore({ initialState })
      ]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutHeaderComponent);
    component = fixture.debugElement.componentInstance;
    component.account = account;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
