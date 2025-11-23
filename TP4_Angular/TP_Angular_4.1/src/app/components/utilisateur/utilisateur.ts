import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-utilisateur',
  imports: [FormsModule,NgIf],
  templateUrl: './utilisateur.html',
  styleUrl: './utilisateur.css',
})
export class Utilisateur {
  isLoggedIn = false;
  username = '';
  prenomValide = 'Rayen';

  toggleLogin() {
    if (this.username.toLowerCase() === this.prenomValide.toLowerCase()) {
      this.isLoggedIn = !this.isLoggedIn;
    } else {
      alert("Nom incorrect ! Essayez encore.");
    }
  }

}
