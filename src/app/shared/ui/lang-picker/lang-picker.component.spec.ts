// Core
import { FormsModule } from '@angular/forms';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatSelectModule } from '@angular/material/select';

// Components
import { UiLangPickerComponent } from './lang-picker.component';

describe('UiLangPickerComponent', () => {
  let component: UiLangPickerComponent;
  let fixture: ComponentFixture<UiLangPickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatSelectModule],
      declarations: [UiLangPickerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLangPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
