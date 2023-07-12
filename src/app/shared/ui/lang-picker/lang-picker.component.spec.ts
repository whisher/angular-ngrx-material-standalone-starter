import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiLangPickerComponent } from './lang-picker.component';

describe(UiLangPickerComponent.name, () => {
  let fixture: ComponentFixture<UiLangPickerComponent>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [FormsModule, MatSelectModule]
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(UiLangPickerComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
