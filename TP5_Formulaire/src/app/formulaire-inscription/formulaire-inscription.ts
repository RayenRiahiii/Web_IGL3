import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Etudiant } from '../etudiant';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-formulaire-inscription',
  imports: [FormsModule, NgForOf],
  templateUrl: './formulaire-inscription.html',
  styleUrl: './formulaire-inscription.scss',
})
export class FormulaireInscription {
  classes = ['IGL3', 'IGL4','IGL5','IDS3','IDS4','IDS5', 'ICE3', 'ICE4','ICE5'];
  model = new Etudiant(21, 'Mohamed', this.classes[0], 'XYZ');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newEtudiant() {
    this.model = new Etudiant(42, '', '');
  }
}


