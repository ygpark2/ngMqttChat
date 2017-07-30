import { Component, OnInit } from '@angular/core';

import { Subscription } from '../../../core/models/mqtt/subscription.model';
import { MqttService } from '../../../core/services/mqtt.service';

@Component({
  selector: 'app-chat-room-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(private mqttService: MqttService) {

  }

  ngOnInit() {
    this.mqttService.getSessions().subscribe(
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
