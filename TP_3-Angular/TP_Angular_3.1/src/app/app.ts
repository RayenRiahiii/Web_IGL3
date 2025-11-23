import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bienvenue } from "./components/bienvenue/bienvenue";
import { FormsModule } from '@angular/forms';
import { Utilisateur } from "./components/utilisateur/utilisateur";
import { Panier } from "./components/panier/panier";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bienvenue, FormsModule, Utilisateur, Panier],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP_Angular_3.1');
}
