import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output
} from '@angular/core';
import { NgIf } from '@angular/common';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { TranslateModule } from '@ngx-translate/core';

import { LoginRequestDto } from '@api/models';
import { AuthStatus } from '@domains/auth';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-public-login-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    TranslateModule
  ],
  templateUrl: './form.component.html'
})
export class PublicLoginFormComponent implements OnInit {
  @Input() status!: AuthStatus | null;
  @Output() submitted = new EventEmitter<LoginRequestDto>();
  frm!: FormGroup;
  isPasswordHidden = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.frm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.frm.valid) {
      const data = this.frm.getRawValue();
      this.submitted.emit(data);
    }
  }
}
