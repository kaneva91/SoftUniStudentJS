import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../form-styles.scss']
})
export class RegisterComponent {
  constructor(private router: Router) {}

  registerHandler() {
    this.router.navigate([''])
  }
}
