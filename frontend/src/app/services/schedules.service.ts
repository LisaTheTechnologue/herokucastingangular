import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

export interface Schedule {
  id: number;
  name: string;
  gender: string;
  age: number
}

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  url = environment.apiServerUrl;

  public items: {[key: number]: Schedule} = {}
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
  getSchedules() {
    
    this.http.get(this.url + '/schedules', this.getHeaders())
    .subscribe((res: any) => {
      this.schedulesToItems(res.schedules);
      console.log(res);
    });
  }

  //view one
  getOneSchedule(schedule: Schedule) {
    if (this.auth.can('get:schedules-detail')) {
      this.http.get(this.url + '/schedules-detail/'+schedule.id, this.getHeaders())
      .subscribe((res: any) => {
        this.schedulesToItems(res.schedules);
        console.log(res);
      });
    } else {
      this.http.get(this.url + '/schedules', this.getHeaders())
      .subscribe((res: any) => {
        this.schedulesToItems(res.schedules);
        console.log(res);
      });
    }
  }

  // update + create
  saveSchedule(schedule: Schedule) {
    if (schedule.id >= 0) { // patch
      this.http.patch(this.url + '/schedules/' + schedule.id, schedule, this.getHeaders())
      .subscribe( (res: any) => {
        if (res.success) {
          this.schedulesToItems(res.schedules);
        }
      });
    } else { // insert
      this.http.post(this.url + '/schedules', schedule, this.getHeaders())
      .subscribe( (res: any) => {
        if (res.success) {
          this.schedulesToItems(res.schedules);
        }
      });
    }

  }

  //delete
  deleteSchedule(schedule: Schedule) {
    delete this.items[schedule.id];
    this.http.delete(this.url + '/schedules/' + schedule.id, this.getHeaders())
    .subscribe( (res: any) => {

    });
  }

  schedulesToItems( schedules: Array<Schedule>) {
    for (const schedule of schedules) {
      this.items[schedule.id] = schedule;
    }
  }
}

