import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [NgClass,NgStyle,NgIf,NgFor],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  taches = [
    { description: 'Étudier Angular', statut: false, priorite: 'haute' },
    { description: 'Faire les courses', statut: true, priorite: 'moyenne' },
    { description: 'Aller à la salle', statut: false, priorite: 'basse' }
  ];

  basculerStatut(tache: any) {
    tache.statut = !tache.statut;
  }

  supprimerTaches() {
    this.taches = [];
  }
}
