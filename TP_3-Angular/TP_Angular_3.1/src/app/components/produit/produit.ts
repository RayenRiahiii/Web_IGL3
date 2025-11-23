import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [CurrencyPipe,],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  @Input() nomProduit!: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();
  prixProduit : number = 1.5;
  imageUrl : string = 'https://otrity.com/wp-content/uploads/2020/10/lait-delic-.jpg'
  afficherAlerte() {
    this.messageEvent.emit('Produit ajouté au panier !');
  }
}
