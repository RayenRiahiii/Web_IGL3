import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Utilisateur } from "./components/utilisateur/utilisateur";
import { FormsModule } from '@angular/forms';
import { Profil } from './components/profil/profil';
import { Adresse } from "./components/adresse/adresse";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Utilisateur, FormsModule, Profil, Adresse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP_Angular_2.1');
}
