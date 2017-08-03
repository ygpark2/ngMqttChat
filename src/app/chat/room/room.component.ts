import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';

import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  public roomName: string;
  private routeSub: Subscription;

  constructor(private _mqttService: MqttService,
              private route: ActivatedRoute,
              private settingsService: SettingsService) {
    this.routeSub = this.route.params.subscribe(params => {
       this.roomName = params['name'];

       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
