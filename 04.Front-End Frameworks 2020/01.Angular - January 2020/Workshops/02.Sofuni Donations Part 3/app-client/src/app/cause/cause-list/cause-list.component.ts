import { Component} from '@angular/core';
import{CausesService} from '../causes.service';
import { ICause } from '../../shared/interfaces/cause';

@Component({
  selector: 'app-cause-list',
  templateUrl: './cause-list.component.html',
  styleUrls: ['./cause-list.component.scss', ]
})
export class CauseListComponent {

   causes : ICause[];

  constructor(private causeService : CausesService) { 
   this.causeService.getData().subscribe((data) =>{
      this.causes = data;
    }) 
  }
  causeHandler(cause: ICause){
    this.causeService.selectedCause = cause;
  }
}
