import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActorsListPage } from './actors-list.page';
import { ActorGraphicComponent } from './actor-graphic/actor-graphic.component';
import { ActorFormComponent } from './actor-form/actor-form.component'

const routes: Routes = [
  {
    path: '',
    component: ActorsListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ActorFormComponent],
  declarations: [ActorsListPage, ActorGraphicComponent, ActorFormComponent],
})
export class ActorsListPageModule {}
