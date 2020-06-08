import { Component, OnInit, Input } from '@angular/core';
import { Actor, ActorsService } from 'src/app/services/actors.service';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.scss'],
})
export class ActorFormComponent implements OnInit {
  @Input() actor: Actor;
  @Input() isNew: boolean;

  constructor(
    public auth: AuthService,
    private modalCtrl: ModalController,
    private actorService: ActorsService
    ) { }

  ngOnInit() {
    if (this.isNew) {
      this.actor = {
        id: -1,
        name: '',
        gender: '',
        age: -1
      };
      // this.addIngredient();
    }
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  // addIngredient(i: number = 0) {
  //   this.actor.recipe.splice(i + 1, 0, {name: '', gender: 'white', age: 1});
  // }

  // removeIngredient(i: number) {
  //   this.actor.recipe.splice(i, 1);
  // }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  saveClicked() {
    this.actorService.saveActor(this.actor);
    this.closeModal();
  }

  deleteClicked() {
    this.actorService.deleteActor(this.actor);
    this.closeModal();
  }
}
