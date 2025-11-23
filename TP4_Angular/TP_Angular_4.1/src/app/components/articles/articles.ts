import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  imports: [NgFor,FormsModule,NgClass],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  articles = [
    { id: 1, title: 'Article 1', content: 'Contenu de l\'article 1' ,importance : 'élevée' },
    { id: 2, title: 'Article 2', content: 'Contenu de l\'article 2' ,importance : 'moyenne' },
    { id: 3, title: 'Article 3', content: 'Contenu de l\'article 3' , importance : 'faible' },
  ]
  newArticleImportance = '';
  newArticleTitle = '';
  newArticleContent = '';
  ajouterArticle() {
    if (!this.newArticleTitle.trim()) return;
    const newId = this.articles.length + 1;
    this.articles.push({ id: newId, title: this.newArticleTitle, content: this.newArticleContent , importance: this.newArticleImportance });
    this.newArticleTitle = '';
    this.newArticleContent = '';
  }
}

