import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles : Article[];

  constructor() {
    this.articles = [new Article('Angular Homepage', 'http://angular.io', 1 ),
    new Article('Angular 2', 'http://angular.io', 3 ),
    new Article('Fullstack', 'http://fullstack.io', 2 )
  ]; 
}

sortedArticles(): Article[]
{
  return this.articles.sort((a: Article, b:Article) => a.votes - b.votes );
}

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
}
