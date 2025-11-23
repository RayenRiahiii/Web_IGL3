import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { GameComponent } from './components/game-component/game-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: '**', redirectTo: '' }
];