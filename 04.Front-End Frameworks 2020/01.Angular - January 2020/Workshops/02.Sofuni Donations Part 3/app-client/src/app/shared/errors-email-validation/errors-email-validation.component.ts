import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errors-email-validation',
  templateUrl: './errors-email-validation.component.html',
  styleUrls: ['./errors-email-validation.component.scss']
})
export class ErrorsEmailValidationComponent implements OnInit {

@Input() emailInput;


  constructor() { 
    console.log(this.emailInput)
  }

  ngOnInit() {
  }

}
