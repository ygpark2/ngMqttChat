import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  public myMessage: string;
  public myOtherMessage$: Observable<MqttMessage>;

  constructor(private _mqttService: MqttService) {
    this._mqttService.observe('my/topic').subscribe((message: MqttMessage) => {
      this.myMessage = message.payload.toString();
    });
    this.myOtherMessage$ = this._mqttService.observe('my/other/topic');
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  public publish(topic: string, message: string): Observable<void> {
    return this._mqttService.publish(topic, message, {qos: 1, retain: true});
  }

  ngOnInit() {
  }

  public sendMsg(msg) {
    console.log(msg.value);
    this.unsafePublish("my/topic", msg.value);
    msg.value = "";
    msg.focus();
  }
}
