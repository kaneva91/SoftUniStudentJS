import { Component } from '@angular/core';
import { CausesService } from '../cause/causes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  get selectedCause() {
    return this.causeService.selectedCause;

  }
  constructor(private causeService: CausesService) { }
}
