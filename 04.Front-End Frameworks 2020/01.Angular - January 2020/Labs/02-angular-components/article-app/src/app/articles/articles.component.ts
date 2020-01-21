import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

  ngOnInit() {
    this.articles = new ArticleData().getData();
  }
}
