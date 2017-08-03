import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MqttMessage, MqttModule, MqttService, PublishOptions } from 'ngx-mqtt';

import { Message } from '../../../core/models/chat/message.model';

import { SettingsService } from '../../../core/services/settings.service';
import { MqttChatService } from '../../../core/services/mqtt.chat.service';

@Component({
  selector: 'app-chat-room-input-action',
  templateUrl: './input-action.component.html',
  styleUrls: ['./input-action.component.scss']
})
export class InputActionComponent implements OnInit {

  @Input() roomName: string;

  constructor(private mqttChatService: MqttChatService,
              private route: ActivatedRoute,
              private settingsService: SettingsService) {

  }



  ngOnInit() {

  }

  ngOnDestroy() {
    
  }

  public sendMsg(msg) {
    console.log(msg.value);
    let chatMsg: Message = {
      id: 0,
      type: "MSG",
      content: msg.value,
      createdBy: this.mqttChatService.clientId,
      createdAt: new Date()
    }
    const topic = this.settingsService.environment.mtqqBaseTopicName + this.roomName;
    this.mqttChatService.unsafePublish(topic, JSON.stringify(chatMsg));
    msg.value = "";
    msg.focus();
  }

}
