import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { IProduct } from 'src/app/shared/interfaces/product-interface';
import { ICategory } from 'src/app/shared/interfaces/category-interface';


@Component({
  selector: 'app-caterories',
  templateUrl: './caterories.component.html',
  styleUrls: ['./caterories.component.css']
})
export class CateroriesComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  private data : ICategory[];

  get categories() {
    return this.data
  }
  ngOnInit() {
    this.categoryService.getCategories().subscribe(resp => this.data = resp);
  }
}


