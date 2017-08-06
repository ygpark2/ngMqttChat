import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';

import { SettingsService } from '../../../core/services/settings.service';

import { Message } from '../../../core/models/chat/message.model';

@Component({
  selector: 'app-chat-room-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.scss']
})
export class MessageContentComponent implements OnInit {

  public msgList: Array<Message> = [];

  @Input() roomName: string;

  public mqttClientId: string;

  constructor(private _mqttService: MqttService, private route: ActivatedRoute, private settingsService: SettingsService) {
    this.mqttClientId = this._mqttService.clientId;
  }

  ngOnInit() {
    this._mqttService.observe(this.settingsService.environment.mtqqBaseTopicName+this.roomName).subscribe((message: MqttMessage) => {
      let msg: Message = JSON.parse(message.payload.toString());
      switch(msg.type) {
        case "MSG":
          this.msgList.push(msg);
          break;
        case "CMD":

          break;
        default:

          break;
      }
    });
  }

}
