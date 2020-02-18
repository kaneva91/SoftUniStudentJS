import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';


@Component({
  selector: 'app-caterories',
  templateUrl: './caterories.component.html',
  styleUrls: ['./caterories.component.css']
})
export class CateroriesComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  private data;

  get categories() {
    return this.data
  }
  ngOnInit() {
    this.categoryService.getCategories().subscribe(resp => this.data = resp);

  }

}


