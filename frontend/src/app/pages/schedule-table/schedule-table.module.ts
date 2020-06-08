import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScheduleTablePage } from './schedule-table.page';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { ScheduleGraphicComponent } from './schedule-graphic/schedule-graphic.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleTablePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ScheduleFormComponent],
  declarations: [ScheduleTablePage, ScheduleGraphicComponent, ScheduleFormComponent],
})
export class ScheduleTablePageModule {}
