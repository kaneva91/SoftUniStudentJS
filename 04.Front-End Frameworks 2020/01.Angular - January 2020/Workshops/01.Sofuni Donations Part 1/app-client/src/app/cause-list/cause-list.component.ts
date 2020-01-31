import { Component} from '@angular/core';
import{CausesService} from '../services/causes.service';
import { ICause } from '../interfaces/cause';

@Component({
  selector: 'app-cause-list',
  templateUrl: './cause-list.component.html',
  styleUrls: ['./cause-list.component.scss']
})
export class CauseListComponent {

   causes : ICause[];

  constructor(private causeService : CausesService) { 
   this.causeService.LoadCauses().subscribe((data) =>{
      this.causes = data;
    })     
  }
  causeHandler(cause: ICause){
    this.causeService.selectedCause = cause;
  }
}
