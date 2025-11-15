import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CompareEditorComponent } from './compare-editor/compare-editor.component';
import { environment } from '../environments/environment';

const defaultComponent = environment.envName === 'Netlify'
  ? CompareEditorComponent
  : HomeComponent;

const routes: Routes = [
  { path: '', component: defaultComponent },
  { path: 'home', component: HomeComponent },
  { path: 'textcompare', component: CompareEditorComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}