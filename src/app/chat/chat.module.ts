import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdInputModule, MdGridListModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdDialogModule, MdSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';

import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';

import { ChatComponent } from './chat.component';
import { RoomComponent } from './room/room.component';
import { TopicComponent } from './topic/topic.component';
import { LeftMenuComponent } from './room/left-menu/left-menu.component';
import { TopBarComponent } from './room/top-bar/top-bar.component';
import { MessageContentComponent } from './room/message-content/message-content.component';
import { InputActionComponent } from './room/input-action/input-action.component';

export const MQTT_SERVICE_OPTIONS = {
  hostname: 'localhost',
  port: 8083,
  path: '/mqtt'
};

export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: mqttServiceFactory
    }),
    ChatRoutingModule
  ],
  declarations: [
    ChatComponent,
    RoomComponent,
    TopicComponent,
    LeftMenuComponent,
    TopBarComponent,
    MessageContentComponent,
    InputActionComponent
  ]
})
export class ChatModule { }
