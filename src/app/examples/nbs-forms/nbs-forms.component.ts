import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'nbs-forms',
  templateUrl: './nbs-forms.component.html',
  styleUrls: ['./nbs-forms.component.scss']
})
export class NbsFormsComponent {
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = formBuilder.group({
      text: ['',
        [Validators.required, Validators.maxLength(50)],
      ],
      textWithIcon: [],
      select: [''],
      selectMultiple: [''],
      textarea: ['',
        [Validators.required, Validators.maxLength(500)],
      ],
      toggle: [''],
      checkbox: [''],
    });
  }
}