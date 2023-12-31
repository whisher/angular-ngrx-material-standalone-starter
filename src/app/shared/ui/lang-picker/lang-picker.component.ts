import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectChange } from '@angular/material/select';
import { Language } from '@domains/settings';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-lang-picker',
  standalone: true,
  imports: [NgFor, UpperCasePipe, FormsModule, MatSelectModule],
  template: `
    <mat-select [ngModel]="language" (selectionChange)="onUseLanguage($event)">
      <mat-option *ngFor="let lang of languages" [value]="lang">
        {{ lang | uppercase }}
      </mat-option>
    </mat-select>
  `
})
export class UiLangPickerComponent {
  @Output() useLanguage = new EventEmitter<Language>();
  @Input({ required: true }) language!: Language | null;
  @Input({ required: true }) languages: Language[] = [];

  onUseLanguage(event: MatSelectChange) {
    const lang = event.value as Language;
    this.useLanguage.emit(lang);
  }
}
