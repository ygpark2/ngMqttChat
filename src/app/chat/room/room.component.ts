import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
// import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';

import { MqttMessage, MqttModule, MqttService, MqttServiceOptions, MqttConnectionState } from 'ngx-mqtt';

import { Subscription as SubscriptionModel } from '../../core/models/mqtt/subscription.model';
import { SubscriptionResult } from '../../core/models/mqtt/results/subscription.result.model';
import { MqttApiService } from '../../core/services/mqtt.api.service';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  public participants: Array<SubscriptionResult>;

  public roomName: string;
  private routeSub: Subscription;

  constructor(private _mqttService: MqttService,
              private route: ActivatedRoute,
              private mqttApiService: MqttApiService,
              private settingsService: SettingsService) {

    this.routeSub = this.route.params.subscribe(params => {
       this.roomName = params['name'];

       this._mqttService.state.subscribe(
        (res) => {
          if (res === MqttConnectionState.CONNECTED) {
            this.mqttApiService.getSubscriptions().subscribe(
              res => {
                console.log(res);
                let sub: SubscriptionModel = res;
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
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
