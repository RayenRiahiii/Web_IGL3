import { Component } from '@angular/core';
import { Produit } from "../produit/produit";

@Component({
  selector: 'app-panier',
  imports: [Produit],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
  recievedMessage: string = '';
  recieveMessage(message : string) {
    this.recievedMessage = message;
  }
}
