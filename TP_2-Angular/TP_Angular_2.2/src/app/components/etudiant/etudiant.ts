import { Component } from '@angular/core';
import {Student} from './TypeStudent' ;
import { NgFor, PercentPipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  imports: [NgFor,PercentPipe,FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
  etudiant : Student={
    id:1,
    name:'Rayen',
    lastname:'Riahi',
    average: 15.5
    };
  etudiants : Student[]=[{id:1, name:'Rayen', lastname:'Riahi', average: 15.5},{id:2, name:'Wajdi', lastname:'Aloui', average: 9.0}, {id:3, name:'Iheb', lastname:'Magouri', average: 17}];
}
