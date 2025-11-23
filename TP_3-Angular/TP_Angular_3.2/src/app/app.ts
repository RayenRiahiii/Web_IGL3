import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Panier } from "./components/panier/panier";
import { Produit } from "./components/produit/produit";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Panier, Produit],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP_Angular_3.2');
  panierItems: string[] = [];
gererAjoutAuPanier(nomProduit: string): void {
this.panierItems.push(nomProduit);console.log(`${nomProduit} ajouté au panier.`);
}

}
