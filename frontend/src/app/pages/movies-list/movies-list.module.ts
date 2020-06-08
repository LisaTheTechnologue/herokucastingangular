import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoviesListPage } from './movies-list.page';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieGraphicComponent } from './movie-graphic/movie-graphic.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [MovieFormComponent],
  declarations: [MoviesListPage, MovieGraphicComponent, MovieFormComponent],
})
export class MoviesListPageModule {}
