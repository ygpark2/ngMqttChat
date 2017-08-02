import { Component, OnInit } from '@angular/core';

import { Subscription } from '../../../core/models/mqtt/subscription.model';
import { MqttApiService } from '../../../core/services/mqtt.api.service';

@Component({
  selector: 'app-chat-room-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(private mqttApiService: MqttApiService) {

  }

  ngOnInit() {
    this.mqttApiService.getSubscriptions().subscribe(
      res => {
        console.log(res);
        let sub: Subscription = res;
        console.log(sub.result);
      },
      error => {
        // this.errorMessage = <any>error
      }
    );
  }

}
