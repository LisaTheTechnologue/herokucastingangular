import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

export interface Actor {
  id: number;
  name: string;
  gender: string;
  age: number
}

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  url = environment.apiServerUrl;

  public items: {[key: number]: Actor} = {}
                                          //   1: {
                                          //         id: 1,
                                          //         name: 'milk',
                                          //         gender: 'grey',
                                          //         age: 1,
                                          //       },
                                          //   2: {
                                          //         id: 2,
                                          //         name: 'milk',
                                          //         gender: 'grey',
                                          //         age: 3
                                          //       },
                                          //   3: {
                                          //     id: 3,
                                          //     name: 'foam',
                                          //     gender: 'white',
                                          //     age: 1
                                          //       },
                                          // };


  constructor(private auth: AuthService, private http: HttpClient) { }

  getHeaders() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.auth.activeJWT()}`)
    };
    return header;
  }

  //view all
  getActors() {
    
    this.http.get(this.url + '/actors', this.getHeaders())
    .subscribe((res: any) => {
      this.actorsToItems(res.actors);
      console.log(res);
    });
  }

  //view one
  getOneActor(actor: Actor) {
    if (this.auth.can('get:actors-detail')) {
      this.http.get(this.url + '/actors-detail/'+actor.id, this.getHeaders())
      .subscribe((res: any) => {
        this.actorsToItems(res.actors);
        console.log(res);
      });
    }
  }

  // update + create
  saveActor(actor: Actor) {
    if (actor.id >= 0) { // patch
      this.http.patch(this.url + '/actors/' + actor.id, actor, this.getHeaders())
      .subscribe( (res: any) => {
        if (res.success) {
          this.actorsToItems(res.actors);
        }
      });
    } else { // insert
      this.http.post(this.url + '/actors', actor, this.getHeaders())
      .subscribe( (res: any) => {
        if (res.success) {
          this.actorsToItems(res.actors);
        }
      });
    }

  }

  //delete
  deleteActor(actor: Actor) {
    delete this.items[actor.id];
    this.http.delete(this.url + '/actors/' + actor.id, this.getHeaders())
    .subscribe( (res: any) => {

    });
  }

  actorsToItems( actors: Array<Actor>) {
    for (const actor of actors) {
      this.items[actor.id] = actor;
    }
  }
}

