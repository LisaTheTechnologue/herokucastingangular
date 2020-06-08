import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import { ActorsService, Actor } from 'src/app/services/actors.service';
import { ActorFormComponent } from './actor-form/actor-form.component';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.page.html',
  styleUrls: ['./actors-list.page.scss'],
})
export class ActorsListPage implements OnInit {
  Object = Object;

  constructor(
    private auth: AuthService,
    private modalCtrl: ModalController,
    public actors: ActorsService
    ) { }

  ngOnInit() {
    this.actors.getActors();
  }

  async openForm(activeactor: Actor = null) {
    if (!this.auth.can('get:actors-detail')) {
      return;
    }

    const modal = await this.modalCtrl.create({
      component: ActorFormComponent,
      componentProps: { actor: activeactor, isNew: !activeactor }
    });

    modal.present();
  }

}
