import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';

import { SettingsService } from '../../../core/services/settings.service';

@Component({
  selector: 'app-chat-room-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.scss']
})
export class MessageContentComponent implements OnInit {

  public myMessage: string;
  public myOtherMessage$: Observable<MqttMessage>;

  private roomName: string;
  private sub: Subscription;

  constructor(private _mqttService: MqttService, private route: ActivatedRoute, private settingsService: SettingsService) {
    this.sub = this.route.params.subscribe(params => {
       this.roomName = params['name'];

       // In a real app: dispatch action to load the details here.
    });

  }

  ngOnInit() {
    this._mqttService.observe(this.settingsService.environment.mtqqBaseTopicName+this.roomName).subscribe((message: MqttMessage) => {
      this.myMessage = message.payload.toString();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
