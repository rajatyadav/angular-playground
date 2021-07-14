import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';

import { TemplateFormComponent } from './template-form/template-form.component'
import { CaregiversListComponent } from './caregivers/caregivers-list/caregivers-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { CssAnimationComponent } from './css-animation/css-animation.component';

const routes: Routes = [
  { path: 'css-animation', component: CssAnimationComponent },
  { path: 'home', component: TemplateFormComponent },
  {
    path: 'patients',
    loadChildren: () => 
      import('./patients/patients.module').then(m => m.PatientsModule)
  },
  { path: 'caregivers', component: CaregiversListComponent },
  { path: '', redirectTo: 'css-animation', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
