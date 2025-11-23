import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule,NgStyle,NgFor,],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = [
    { name: 'Ordinateur', stock: 70 },
    { name: 'Clavier', stock: 35 },
    { name: 'Souris', stock: 10 }
  ];

  updateStock(index: number, newValue: number) {
    this.products[index].stock = newValue;
  }
}
