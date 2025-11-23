import { NgClass, NgStyle } from '@angular/common';
import { Component,Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [NgClass,NgStyle],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  @Input() nomProduit: string = 'Produit Par Défaut';
  @Input() description: string = 'Description du produit par défaut.';
  @Output() ajouterAuPanier = new EventEmitter<string>();
  enStock: boolean = true;
  toggleStock(): void {
    this.enStock = !this.enStock;
    }
  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
    }
}
