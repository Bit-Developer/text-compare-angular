import { RouterModule, Routes } from "@angular/router";

// components
import { HomeComponent } from './home/home.component';
import { DiffComponent } from './diff/diff.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'diff', component: DiffComponent },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

