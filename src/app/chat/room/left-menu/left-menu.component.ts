import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MqttMessage, MqttModule, MqttService, MqttServiceOptions, MqttConnectionState } from 'ngx-mqtt';

import { Subscription } from '../../../core/models/mqtt/subscription.model';
import { SubscriptionResult } from '../../../core/models/mqtt/results/subscription.result.model';
import { MqttApiService } from '../../../core/services/mqtt.api.service';
import { SettingsService } from '../../../core/services/settings.service';

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
    this._mqttService.state.subscribe(
      (res) => {
        if (res === MqttConnectionState.CONNECTED) {
          this.mqttApiService.getSubscriptions().subscribe(
            res => {
              console.log(res);
              let sub: Subscription = res;
              this.participants = sub.result.filter((val) => val.topic.endsWith(this.roomName));
              console.log(sub.result);
            },
            error => {
              // this.errorMessage = <any>error
            }
          );
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
