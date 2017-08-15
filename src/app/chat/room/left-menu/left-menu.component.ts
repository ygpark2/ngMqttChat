import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MqttMessage, MqttModule, MqttService, MqttServiceOptions, MqttConnectionState } from 'ngx-mqtt';

import { Subscription } from '../../../core/models/mqtt/subscription.model';
import { SubscriptionResult } from '../../../core/models/mqtt/results/subscription.result.model';
import { MqttApiService } from '../../../core/services/mqtt.api.service';
import { SettingsService } from '../../../core/services/settings.service';

import { Message } from '../../../core/models/chat/message.model';

@Component({
  selector: 'app-chat-room-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  public participants: Array<SubscriptionResult>;

  @Input() roomName: string;

  constructor(private _mqttService: MqttService,
              private settingsService: SettingsService,
              private mqttApiService: MqttApiService) {

  }

  ngOnInit() {

    this._mqttService.observe(this.settingsService.environment.mtqqBaseTopicName+this.roomName)
      .map(data => { let msg: Message = JSON.parse(data.payload.toString()); return msg; })
      .filter(msg => msg.type === "CMD")
      .subscribe((message: Message) => {
          // this.msgList.push(message);
      });

  }

}
