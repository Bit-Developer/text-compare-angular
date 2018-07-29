import { RouterModule, Routes } from "@angular/router";

// components
import { HomeComponent } from './home/home.component';
import { TextCompareComponent } from './textcompare/textcompare.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'textcompare', component: TextCompareComponent },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

