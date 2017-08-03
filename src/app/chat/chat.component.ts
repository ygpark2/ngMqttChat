import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MqttMessage, MqttModule, MqttService, MqttServiceOptions, MqttConnectionState } from 'ngx-mqtt';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { Subscription } from '../core/models/mqtt/subscription.model';
import { Topic } from '../core/models/mqtt/topic.model';

import { MqttApiService } from '../core/services/mqtt.api.service';
import { SettingsService } from '../core/services/settings.service';

import { CreateRoomComponent } from './create-room/create-room.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public topicList = [];

  constructor(private _mqttService: MqttService,
              private mqttApiService: MqttApiService,
              private settingsService: SettingsService,
              private dialog: MdDialog,
              private router: Router) {

  }

  ngOnInit() {

    console.log("clientId => " + this._mqttService.clientId);
    this._mqttService.state.subscribe(
      (res) => {
        if (res === MqttConnectionState.CONNECTED) {
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

          this.mqttApiService.getTopics().subscribe(
            res => {
              console.log(res);
              let topic: Topic = res;
              this.topicList = topic.result.filter((t) => t.topic.startsWith(this.settingsService.environment.mtqqBaseTopicName));
              console.log(topic.result);
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

  ngAfterViewInit() {

  }

  public createRoomDialog() {
    this.dialog.open(CreateRoomComponent);
  }

}
