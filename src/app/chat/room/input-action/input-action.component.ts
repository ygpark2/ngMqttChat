import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';

import { SettingsService } from '../../../core/services/settings.service';

@Component({
  selector: 'app-chat-room-input-action',
  templateUrl: './input-action.component.html',
  styleUrls: ['./input-action.component.scss']
})
export class InputActionComponent implements OnInit {

  private roomName: string;
  private sub: Subscription;

  constructor(private _mqttService: MqttService, private route: ActivatedRoute, private settingsService: SettingsService) {
    this.sub = this.route.params.subscribe(params => {
       this.roomName = params['name'];

       // In a real app: dispatch action to load the details here.
    });
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  public publish(topic: string, message: string): Observable<void> {
    return this._mqttService.publish(topic, message, {qos: 1, retain: true});
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public sendMsg(msg) {
    console.log(msg.value);
    this.unsafePublish(this.settingsService.environment.mtqqBaseTopicName + this.roomName, msg.value);
    msg.value = "";
    msg.focus();
  }

}
