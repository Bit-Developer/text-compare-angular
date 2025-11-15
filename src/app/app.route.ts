import { Routes } from '@angular/router';

// components
import { HomeComponent } from './home/home.component';
import { CompareEditorComponent } from './compare-editor/compare-editor.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'textcompare', component: CompareEditorComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
