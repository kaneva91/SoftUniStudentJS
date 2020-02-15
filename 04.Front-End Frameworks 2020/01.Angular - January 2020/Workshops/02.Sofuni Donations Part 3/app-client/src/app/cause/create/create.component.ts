import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss',  '../../form-styles.scss']
})
export class CreateComponent {

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      cause: ['', [Validators.required]],
      neededAmount: [null, [Validators.required, Validators.min(10)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      imageUrl: ['', [Validators.required]]
    })
  }


}
