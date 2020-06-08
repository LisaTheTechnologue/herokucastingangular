import { Component, OnInit } from '@angular/core';
import { SchedulesService, Schedule } from '../../services/schedules.service';
import { ModalController } from '@ionic/angular';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.page.html',
  styleUrls: ['./schedule-table.page.scss'],
})
export class ScheduleTablePage implements OnInit {
  Object = Object;

  constructor(
    private auth: AuthService,
    private modalCtrl: ModalController,
    public schedules: SchedulesService
    ) { }

  ngOnInit() {
    this.schedules.getSchedules();
  }

  async openForm(activeschedule: Schedule = null) {
    if (!this.auth.can('get:schedules-detail')) {
      return;
    }

    const modal = await this.modalCtrl.create({
      component: ScheduleFormComponent,
      componentProps: { schedule: activeschedule, isNew: !activeschedule }
    });

    modal.present();
  }

}
