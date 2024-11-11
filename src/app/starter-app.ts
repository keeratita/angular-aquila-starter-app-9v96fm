import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NxDialogService, NxModalRef } from '@aposin/ng-aquila/modal';

@Component({
  selector: 'starter-app',
  templateUrl: './starter-app.html',
  styleUrls: ['./starter-app.css'],
})
export class StarterComponent {
  @ViewChild('consentTemplate')
  consentTemplateRef!: TemplateRef<any>;

  @ViewChild('submitTemplate')
  submitTemplateRef!: TemplateRef<any>;

  dialogRef?: NxModalRef<any, any>;

  formGroup: FormGroup;

  constructor(public dialogService: NxDialogService) {
    this.formGroup = new FormBuilder().group({
      name: ['', Validators.required],
      items: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      consent: [false, Validators.requiredTrue],
    });
  }

  openConsentDialog(): void {
    this.dialogRef = this.dialogService.open(this.consentTemplateRef, {
      ariaLabel: 'A modal with content',
      showCloseIcon: true,
    });
  }

  openSubmitDialog(): void {
    this.dialogRef = this.dialogService.open(this.submitTemplateRef, {
      ariaLabel: 'The final modal of the Starter App',
      showCloseIcon: false,
    });
  }

  closeDialog() {
    this.dialogRef?.close();
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.openSubmitDialog();
    }
  }
}

/**  Copyright APOSIN 2022 */
