import { Component, Input } from '@angular/core';
import { Article } from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  private symbols : number = 250;
  @Input() article : Article;
  @Input() articleDesc : string;
  descToShow : string = '';
  articleDescLen : number = 0;
  showReadMoreBtn : boolean = true;
  showHideBtn:boolean = false;
  imageIsShown : boolean = false;
  imageButtonTitle : string = 'Show Image';

 

  readMore() : void{
    this.articleDescLen += this.symbols;

    if(this.articleDescLen >= this.articleDesc.length){
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    }
    this.descToShow = this.articleDesc.substring(0, this.articleDescLen)
  }

  toggleImage(){
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle === 'Show Image' ? 'Hide Image' : 'Show Image';
  }

  hideDesc() {
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
}
