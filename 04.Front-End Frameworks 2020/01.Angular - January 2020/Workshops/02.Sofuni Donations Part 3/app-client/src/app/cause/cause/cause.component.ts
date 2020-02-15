import { Component, Input, OnInit } from '@angular/core';
import { CausesService } from '../causes.service';
import { ICause } from '../../shared/interfaces/cause';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.scss']
})
export class CauseComponent implements OnInit {
  @Input() selectedCause: ICause;
  private causeID : string;

  get color() {
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) {
      return 'green';
    }
    if (
      this.selectedCause.collectedAmount < 2 * (this.selectedCause.neededAmount / 3) &&
      this.selectedCause.collectedAmount > (this.selectedCause.neededAmount / 3)
    ) {
      return 'yellow';
    }
    return 'red';
  }
  constructor(private causeService: CausesService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.causeID = this.activatedRoute.snapshot.params.id;
  }
  ngOnInit() {
    !!this.causeID && this.causeService.getData(this.causeID).subscribe(data => this.selectedCause = data)
  }

}
