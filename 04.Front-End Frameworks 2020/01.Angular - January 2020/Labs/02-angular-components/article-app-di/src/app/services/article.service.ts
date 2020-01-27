import { Injectable } from '@angular/core';
import { data } from '../data/mock-data';
import { Article } from '../article/article.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  articles: Article[] = [];
  getArticles() {
    data.map((a) => {
      let { title, description, author, imageUrl } = a;
      this.articles.push(new Article(title, description, author, imageUrl))
    })
    return this.articles;
  }
}
