import { Component } from '@angular/core';
import { Article } from '../article/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles: Article[];

  constructor(articleService: ArticleService) {
    this.articles = articleService.getArticles();
  }
}
