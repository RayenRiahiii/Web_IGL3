import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-question',
  templateUrl: './question-component.html',
  styleUrls: ['./question-component.css'],
  imports: [NgFor]
})
export class QuestionComponent {
  @Input() question!: Question;
  @Output() optionSelected = new EventEmitter<string>();

  selectOption(option: string): void {
    this.optionSelected.emit(option);
  }

  getButtonClass(option: string): string {
    if (!this.question.answered) {
      return 'option-btn';
    }
    
    if (option === this.question.reponse) {
      return 'option-btn correct';
    }
    
    if (option === this.question.selectedOption) {
      return 'option-btn incorrect';
    }
    
    return 'option-btn disabled';
  }
}