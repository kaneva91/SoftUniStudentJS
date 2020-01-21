import { Article } from '../article.model';
import { data } from './seed';
export class ArticleData {
    getData() {
        let articles: Article[] = [];
        data.map(article => {
            let { title, description, author, imageUrl } = article;
            articles.push(new Article(title, description, author, imageUrl))
        })
        return articles;
    }
}