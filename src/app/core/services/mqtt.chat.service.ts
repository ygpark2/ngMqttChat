import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MqttMessage, MqttModule, MqttService, PublishOptions } from 'ngx-mqtt';

import { ApiService } from './api.service';
import { SettingsService } from './settings.service';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable()
export class MqttChatService {

  private mqttMsgOption: PublishOptions = {qos: 1, retain: false};

  constructor(private _mqttService: MqttService, private settingsService: SettingsService) {

    
  }

  /**
   *  This method `should` be executed when leaving the application.
   *  gets the _clientId
   */
  public get clientId() {
    return this._mqttService.clientId;
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, this.mqttMsgOption);
  }

  public publish(topic: string, message: string): Observable<void> {
    return this._mqttService.publish(topic, message, this.mqttMsgOption);
  }

}
