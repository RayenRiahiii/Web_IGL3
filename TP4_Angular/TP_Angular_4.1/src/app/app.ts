import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Utilisateur } from "./components/utilisateur/utilisateur";
import { Articles } from "./components/articles/articles";
import { Products } from "./components/products/products";
import { Tasks } from "./components/tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Utilisateur, Articles, Products, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP_Angular_4.1');
}
