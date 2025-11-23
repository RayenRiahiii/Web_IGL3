import { Component } from '@angular/core';
import { Question } from '../../models/question.model';
import { ScoreComponent } from '../score-component/score-component';
import { QuestionComponent } from '../question-component/question-component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-game',
  templateUrl: './game-component.html',
  styleUrls: ['./game-component.css'],
  imports: [ScoreComponent,QuestionComponent,NgIf]
})
export class GameComponent {
  questions: Question[] = [
    {
      id: 1,
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique'
    },
    {
      id: 2,
      question: 'Quelle est la capitale de la France ?',
      options: ['Londres', 'Berlin', 'Paris', 'Madrid'],
      reponse: 'Paris'
    },
    {
      id: 3,
      question: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Vert', 'Rouge', 'Jaune'],
      reponse: 'Bleu'
    },
    {
      id: 4,
      question: 'Combien de continents y a-t-il ?',
      options: ['5', '6', '7', '8'],
      reponse: '7'
    }
  ];

  score: number = 0;
  bonnesReponses: number = 0;
  mauvaisesReponses: number = 0;

  currentQuestionIndex: number = 0;
  
  quizTermine: boolean = false;

  timeLeft: number = 15;
  timer: any;

  constructor() {
    this.startTimer();
  }
  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  startTimer(): void {
    this.timeLeft = 15;
    this.timer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        this.onTimeOut();
      }
    }, 1000);
  }

  stopTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  onTimeOut(): void {
    this.stopTimer();
    this.mauvaisesReponses++;
    this.score -= 5;
    this.currentQuestion.answered = true;
    
    setTimeout(() => this.nextQuestion(), 1500);
  }

  onSelectOption(option: string): void {
    if (this.currentQuestion.answered) {
      return;
    }

    this.stopTimer();
    this.currentQuestion.answered = true;
    this.currentQuestion.selectedOption = option;

    if (option === this.currentQuestion.reponse) {
      this.score += 10;
      this.bonnesReponses++;
    } else {
      this.score -= 5;
      this.mauvaisesReponses++;
    }

    setTimeout(() => this.nextQuestion(), 1500);
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.startTimer();
    } else {
      this.quizTermine = true;
      this.stopTimer();
    }
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.bonnesReponses = 0;
    this.mauvaisesReponses = 0;
    this.quizTermine = false;
    
    this.questions.forEach(q => {
      q.answered = false;
      q.selectedOption = undefined;
    });
    
    this.startTimer();
  }
}